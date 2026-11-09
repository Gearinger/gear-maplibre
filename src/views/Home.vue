<template>
  <div class="workspace-shell">
    <TopMenu :layers-open="leftPanelOpen" :editor-open="rightPanelOpen"
      :can-export-geo-json="canExportGeoJson" :can-undo="canUndo" :can-redo="canRedo"
      @toggle-layers="leftPanelOpen = !leftPanelOpen"
      @toggle-editor="rightPanelOpen = !rightPanelOpen"
      @export-geojson="exportActiveGeoJson" @export-project="exportProject"
      @import-project="chooseProjectFile" @undo="undo" @redo="redo" />
    <input ref="projectInput" type="file" accept=".json,application/json" hidden
      @change="importProjectFile">

    <a-modal v-model:open="showOnboarding" title="开始使用 Gear Map"
      :closable="false" :keyboard="false" :mask-closable="false" :footer="null" width="600px">
      <div class="onboarding">
        <p>选择如何开始当前项目。这个选择只会在首次进入时出现。</p>
        <div class="onboarding-options">
          <button class="onboarding-option" @click="startBlankWorkspace">
            <span class="onboarding-option-title">从空白开始</span>
            <span>自己导入 GeoJSON、FlatGeobuf、瓦片或三维数据。</span>
          </button>
          <button class="onboarding-option accent" @click="startWithSample">
            <span class="onboarding-option-title">填充示例数据</span>
            <span>加载一份示例 GeoJSON，立即体验图层和要素编辑。</span>
          </button>
        </div>
      </div>
    </a-modal>

    <div class="workspace-main" :class="{
      'layers-collapsed': !leftPanelOpen,
      'editor-collapsed': !rightPanelOpen,
    }">
      <aside class="layers-panel">
        <LayerManager />
      </aside>

      <main class="map-pane">
        <Map />
        <div v-if="isGeoJsonBacked(activeLayer)" class="draw-toolbar">
          <span class="draw-toolbar-label">绘制</span>
          <button :class="{ active: drawMode === 'draw_point' }" @click="startDrawing('draw_point')">点</button>
          <button :class="{ active: drawMode === 'draw_line_string' }"
            @click="startDrawing('draw_line_string')">线</button>
          <button :class="{ active: drawMode === 'draw_polygon' }"
            @click="startDrawing('draw_polygon')">面</button>
          <button v-if="geometryEditing" @click="cancelGeometryEditing">取消几何编辑</button>
          <button v-if="drawMode" @click="stopDrawing">结束</button>
        </div>
        <div v-if="layers.length === 0" class="map-empty-state">
          <span>当前项目还没有图层，你仍然可以浏览地图</span>
          <button @click="leftPanelOpen = true">打开图层</button>
        </div>
      </main>

      <aside class="editor-panel">
        <a-tabs v-model:activeKey="rightPanelTab" class="editor-tabs">
          <a-tab-pane key="json" tab="数据">
            <TextContent v-if="isGeoJsonBacked(activeLayer)" v-model="editorContent"
              @update:model-value="applyEditorContent" />
            <div v-else class="editor-empty">
              <strong>当前图层没有 JSON 数据</strong>
              <p>选择 GeoJSON 图层后，可在这里查看和修改数据。</p>
            </div>
          </a-tab-pane>
          <a-tab-pane key="style" tab="样式">
            <LayerStyleEditor />
          </a-tab-pane>
          <a-tab-pane key="feature" tab="要素">
            <FeatureInspector @focus="focusSelectedFeature"
              @edit-geometry="startGeometryEditing" />
          </a-tab-pane>
        </a-tabs>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { bbox } from "@turf/turf";
import { message } from "ant-design-vue";
import type { IControl, MapLayerMouseEvent } from "maplibre-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import Map from "../components/Map.vue";
import TopMenu from "../components/TopMenu.vue";
import LayerManager from "../components/LayerManager.vue";
import TextContent from "../components/TextContent.vue";
import FeatureInspector from "../components/FeatureInspector.vue";
import LayerStyleEditor from "../components/LayerStyleEditor.vue";
import { map } from "../common/MapUtil";
import {
  appendGeoJsonFeatures,
  findGeoJsonFeatureIndex,
  getGeoJsonFeature,
  parseGeoJsonText,
  replaceGeoJsonFeature,
} from "../common/GeoJsonUtil";
import { parseGeoJsonAsync } from "../common/GeoJsonParser";
import { createSnapshotHistory } from "../common/SnapshotHistory";
import {
  addGeoJson,
  addFlatGeoBuf,
  addGeoTiffLayer,
  addModelLayer,
  addPbfLayer,
  addPmtilesLayer,
  addTerrainLayer,
  add3DTilesLayer,
  addTileLayer,
  applyManagedLayerOrder,
  applyManagedLayerStyle,
  removeManagedLayer,
  setManagedLayerOpacity,
  setManagedLayerVisibility,
  updateManagedGeoJson,
} from "../common/MapLayerUtil";
import {
  loadWorkspaceSnapshot,
  saveWorkspaceSnapshot,
} from "../common/WorkspaceStorage";
import { useWorkspace } from "../stores/workspace";
import type {
  WorkspaceLayer,
  WorkspaceSnapshot,
} from "../types/workspace";

const workspace = useWorkspace();
const {
  layers,
  activeLayer,
  activeLayerKey,
  selectedFeature,
  leftPanelOpen,
  rightPanelOpen,
  rightPanelTab,
  projectName,
  saving,
} = workspace;

const editorContent = ref("");
const projectInput = ref<HTMLInputElement>();
const showOnboarding = ref(false);
const drawMode = ref<DrawMode | null>(null);
const geometryEditing = ref(false);
let draw: MapboxDraw | undefined;
let pendingGeometryEdit:
  | { layerKey: string; featureIndex: number }
  | undefined;
let editorSync = false;
let editorTimer: ReturnType<typeof setTimeout> | undefined;
let saveTimer: ReturnType<typeof setTimeout> | undefined;
let persistenceReady = false;
let mapEventsReady = false;
let applyingHistory = false;
let pointerFrame: number | undefined;
let lastPointerPoint: MapLayerMouseEvent["point"] | undefined;

const history = createSnapshotHistory<WorkspaceSnapshot>(
  (snapshot) => JSON.stringify({ ...snapshot, savedAt: "" }),
  40
);

type DrawMode = "draw_point" | "draw_line_string" | "draw_polygon";
type DrawCreatedEvent = { features: GeoJSON.Feature[] };
type DrawEventMap = {
  on(type: "draw.create", listener: (event: DrawCreatedEvent) => void): unknown;
  off(type: "draw.create", listener: (event: DrawCreatedEvent) => void): unknown;
  on(type: "draw.update", listener: (event: DrawCreatedEvent) => void): unknown;
  off(type: "draw.update", listener: (event: DrawCreatedEvent) => void): unknown;
};

const canExportGeoJson = computed(() =>
  isGeoJsonBacked(activeLayer.value) && Boolean(activeLayer.value?.data)
);
const canUndo = computed(() => history.canUndo.value && !applyingHistory);
const canRedo = computed(() => history.canRedo.value && !applyingHistory);

watch(activeLayer, (layer) => {
  editorSync = true;
  editorContent.value =
    isGeoJsonBacked(layer) && layer?.data
      ? JSON.stringify(layer.data, null, 2)
      : "";
  queueMicrotask(() => {
    editorSync = false;
  });
});

watch(activeLayerKey, () => {
  stopDrawing();
});

watch(
  [layers, projectName, activeLayerKey],
  () => {
    if (!persistenceReady || applyingHistory) return;
    clearTimeout(saveTimer);
    saving.value = true;
    saveTimer = setTimeout(async () => {
      try {
        const snapshot = cloneSnapshot(workspace.snapshot());
        history.push(snapshot);
        await saveWorkspaceSnapshot(snapshot);
      } catch (error) {
        console.error("Workspace autosave failed:", error);
        message.error("自动保存失败，请及时导出项目");
      } finally {
        saving.value = false;
      }
    }, 500);
  },
  { deep: true }
);

function downloadJson(fileName: string, value: unknown) {
  const blob = new Blob([JSON.stringify(value, null, 2)], {
    type: "application/geo+json;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  URL.revokeObjectURL(url);
}

function isGeoJsonBacked(
  layer: WorkspaceLayer | undefined
): layer is WorkspaceLayer & { data: GeoJSON.GeoJSON } {
  return Boolean(layer?.data) && (layer?.type === "GeoJSON" || layer?.type === "FlatGeobuf");
}

function cloneSnapshot(snapshot: WorkspaceSnapshot) {
  return JSON.parse(JSON.stringify(snapshot)) as WorkspaceSnapshot;
}

async function applyHistorySnapshot(snapshot: WorkspaceSnapshot) {
  applyingHistory = true;
  stopDrawing();
  try {
    for (const layer of layers.value) {
      try {
        removeManagedLayer(layer);
      } catch (error) {
        console.warn(`Unable to remove layer ${layer.name}:`, error);
      }
    }
    workspace.clearLayers();
    await restoreWorkspace(cloneSnapshot(snapshot));
    await saveWorkspaceSnapshot(cloneSnapshot(snapshot));
  } finally {
    applyingHistory = false;
  }
}

async function undo() {
  clearTimeout(saveTimer);
  history.push(cloneSnapshot(workspace.snapshot()));
  const snapshot = history.undo();
  if (!snapshot) return;
  await applyHistorySnapshot(snapshot);
}

async function redo() {
  const snapshot = history.redo();
  if (!snapshot) return;
  await applyHistorySnapshot(snapshot);
}

function safeFileName() {
  return (projectName.value || "gear-map").replace(/[\\/:*?"<>|]+/g, "-");
}

function exportActiveGeoJson() {
  const layer = activeLayer.value;
  if (!layer?.data) {
    message.warning("请选择一个包含数据的 GeoJSON 图层");
    return;
  }
  downloadJson(`${safeFileName()}-${layer.name}.geojson`, layer.data);
}

function exportProject() {
  downloadJson(`${safeFileName()}.gear-map.json`, workspace.snapshot());
}

function chooseProjectFile() {
  projectInput.value?.click();
}

async function importProjectFile(event: Event) {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  input.value = "";
  if (!file) return;

  if (layers.value.length > 0 && !window.confirm("导入项目会替换当前工作区，是否继续？")) {
    return;
  }

  try {
    const snapshot = JSON.parse(await file.text()) as WorkspaceSnapshot;
    if (snapshot.version !== 1 || !Array.isArray(snapshot.layers)) {
      throw new Error("不是有效的 Gear Map 项目文件");
    }

    for (const layer of layers.value) removeManagedLayer(layer);
    workspace.clearLayers();
    await restoreWorkspace(snapshot);
    history.reset(cloneSnapshot(workspace.snapshot()));
    message.success("项目导入成功");
  } catch (error) {
    message.error(`项目导入失败：${error instanceof Error ? error.message : String(error)}`);
  }
}

async function loadSample() {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}data/smallGeoJSON.geojson`);
    if (!response.ok) throw new Error(`请求失败：${response.status}`);
    const data = await parseGeoJsonAsync(await response.text());
    const sourceName = `sample-${Date.now()}`;
    const layer = workspace.addLayer(await addGeoJson(sourceName, data), "示例 GeoJSON");
    applyManagedLayerStyle(layer);
    message.success("示例数据加载成功");
    return true;
  } catch (error) {
    message.error(`示例数据加载失败：${error instanceof Error ? error.message : String(error)}`);
    return false;
  }
}

async function startBlankWorkspace() {
  showOnboarding.value = false;
  history.reset(cloneSnapshot(workspace.snapshot()));
  await saveWorkspaceSnapshot(workspace.snapshot());
}

async function startWithSample() {
  const loaded = await loadSample();
  if (!loaded) return;
  showOnboarding.value = false;
  history.reset(cloneSnapshot(workspace.snapshot()));
  await saveWorkspaceSnapshot(workspace.snapshot());
}

function applyEditorContent(value: string) {
  if (editorSync || !isGeoJsonBacked(activeLayer.value)) return;
  clearTimeout(editorTimer);
  const layerKey = activeLayer.value.key;
  editorTimer = setTimeout(() => {
    const layer = layers.value.find((item) => item.key === layerKey);
    if (!layer || layer.key !== activeLayer.value?.key) return;
    try {
      updateManagedGeoJson(layer, parseGeoJsonText(value));
    } catch (error) {
      message.warning(`GeoJSON 尚未保存：${error instanceof Error ? error.message : String(error)}`);
    }
  }, 350);
}

function startDrawing(mode: DrawMode) {
  const layer = activeLayer.value;
  if (!draw || !isGeoJsonBacked(layer)) {
    message.warning("请先选择一个包含数据的 GeoJSON 图层");
    return;
  }
  draw.deleteAll();
  (draw.changeMode as unknown as (mode: DrawMode) => void)(mode);
  drawMode.value = mode;
}

function stopDrawing() {
  if (!draw) return;
  draw.deleteAll();
  draw.changeMode("simple_select");
  drawMode.value = null;
  geometryEditing.value = false;
  pendingGeometryEdit = undefined;
}

function onDrawCreated(event: DrawCreatedEvent) {
  const layer = activeLayer.value;
  if (!isGeoJsonBacked(layer)) {
    message.warning("当前没有可编辑的 GeoJSON 图层");
    return stopDrawing();
  }

  const startIndex = layer.data.type === "FeatureCollection"
    ? layer.data.features.length
    : 1;
  const data = appendGeoJsonFeatures(layer.data, event.features);
  layer.data = data;
  updateManagedGeoJson(layer, data);
  stopDrawing();

  const feature = event.features[0];
  if (feature) {
    selectedFeature.value = {
      id: feature.id,
      featureIndex: startIndex,
      layerKey: layer.key,
      layerName: layer.name,
      source: layer.source,
      geometryType: feature.geometry?.type ?? "Unknown",
      properties: feature.properties ?? {},
      feature,
    };
    rightPanelTab.value = "feature";
    rightPanelOpen.value = true;
  }
  message.success("要素已添加，右侧可以继续编辑属性");
}

function cancelGeometryEditing() {
  stopDrawing();
}

function startGeometryEditing() {
  const selected = selectedFeature.value;
  const layer = layers.value.find((item) => item.key === selected?.layerKey);
  if (!draw || !selected || !layer?.data || selected.featureIndex === undefined) {
    message.warning("当前要素不支持几何编辑");
    return;
  }
  if (!["Point", "LineString", "Polygon", "MultiPolygon"].includes(selected.geometryType)) {
    message.warning("当前几何类型暂不支持直接编辑");
    return;
  }

  draw.deleteAll();
  const drawId = `edit-${Date.now()}`;
  draw.add({
    ...selected.feature,
    id: drawId,
  });
  draw.changeMode("direct_select", { featureId: drawId });
  pendingGeometryEdit = {
    layerKey: layer.key,
    featureIndex: selected.featureIndex,
  };
  geometryEditing.value = true;
  message.info("拖动节点修改几何，松开后自动保存");
}

function onDrawUpdated(event: DrawCreatedEvent) {
  const pending = pendingGeometryEdit;
  const feature = event.features[0];
  if (!pending || !feature) return;

  const layer = layers.value.find((item) => item.key === pending.layerKey);
  if (!layer?.data) {
    stopDrawing();
    return;
  }

  try {
    const original = getGeoJsonFeature(layer.data, pending.featureIndex);
    if (!original) throw new Error("找不到原始要素");
    const updated = {
      ...original,
      geometry: feature.geometry,
      properties: feature.properties ?? original.properties,
    };
    const result = replaceGeoJsonFeature(
      layer.data,
      pending.featureIndex,
      updated
    );
    layer.data = result.data;
    updateManagedGeoJson(layer, result.data);
    selectedFeature.value = {
      ...selectedFeature.value!,
      feature: result.feature,
      geometryType: result.feature.geometry.type,
      properties: result.feature.properties ?? {},
    };
    message.success("几何已更新");
  } catch (error) {
    message.error(`几何更新失败：${error instanceof Error ? error.message : String(error)}`);
  } finally {
    stopDrawing();
  }
}

function setupDrawing() {
  if (draw) return;
  draw = new MapboxDraw({
    displayControlsDefault: false,
    controls: {},
  });
  map.addControl(draw as unknown as IControl, "top-right");
  (map as unknown as DrawEventMap).on("draw.create", onDrawCreated);
  (map as unknown as DrawEventMap).on("draw.update", onDrawUpdated);
}

function findLayerForFeature(layerId: string) {
  return layers.value.find((layer) => layer.styleLayerIds.includes(layerId));
}

function queryWorkspaceFeatures(point: Parameters<typeof map.queryRenderedFeatures>[0]) {
  const styleLayerIds = layers.value.flatMap((layer) => layer.styleLayerIds);
  if (styleLayerIds.length === 0) return [];
  return map.queryRenderedFeatures(point, { layers: styleLayerIds });
}

function onMapClick(event: MapLayerMouseEvent) {
  const hit = queryWorkspaceFeatures(event.point)
    .map((feature) => ({ feature, layer: findLayerForFeature(feature.layer.id) }))
    .find((item) => item.layer);

  if (!hit?.layer) {
    selectedFeature.value = undefined;
    return;
  }

  const geojson = hit.feature.toJSON() as GeoJSON.Feature;
  selectedFeature.value = {
    id: hit.feature.id,
    featureIndex: findGeoJsonFeatureIndex(hit.layer.data, hit.feature.id),
    layerKey: hit.layer.key,
    layerName: hit.layer.name,
    source: hit.layer.source,
    geometryType: geojson.geometry?.type ?? "Unknown",
    properties: geojson.properties ?? {},
    feature: geojson,
  };
  activeLayerKey.value = hit.layer.key;
  rightPanelTab.value = "feature";
  rightPanelOpen.value = true;
}

function onPointerMove(event: MapLayerMouseEvent) {
  lastPointerPoint = event.point;
  if (pointerFrame !== undefined) return;
  pointerFrame = requestAnimationFrame(() => {
    pointerFrame = undefined;
    if (!lastPointerPoint) return;
    const hasLayer = queryWorkspaceFeatures(lastPointerPoint)
      .some((feature) => Boolean(findLayerForFeature(feature.layer.id)));
    map.getCanvas().style.cursor = hasLayer ? "pointer" : "";
  });
}

function focusSelectedFeature() {
  if (!selectedFeature.value) return;
  const bounds = bbox(selectedFeature.value.feature);
  if (bounds.every(Number.isFinite)) {
    map.fitBounds(
      [[bounds[0], bounds[1]], [bounds[2], bounds[3]]],
      { padding: 120, maxZoom: 17 }
    );
  }
}

function registerMapEvents() {
  if (mapEventsReady) return;
  map.on("click", onMapClick);
  map.on("mousemove", onPointerMove);
  setupDrawing();
  mapEventsReady = true;
}

async function restoreWorkspace(snapshot: WorkspaceSnapshot) {
  const restored: WorkspaceLayer[] = [];
  for (const saved of snapshot.layers) {
    try {
      let managed;
      if (saved.type === "XYZ-Tile" && saved.url) {
        managed = await addTileLayer(saved.id, saved.url);
      } else if (saved.type === "FlatGeobuf" && saved.url) {
        managed = await addFlatGeoBuf(saved.url, saved.id);
      } else if (saved.type === "FlatGeobuf" && saved.data) {
        managed = {
          ...await addGeoJson(saved.id, saved.data),
          type: "FlatGeobuf",
        };
      } else if (saved.type === "PMTiles" && saved.url) {
        managed = await addPmtilesLayer(saved.id, saved.url);
      } else if (saved.type === "GeoTIFF" && saved.url) {
        managed = await addGeoTiffLayer(saved.id, saved.url);
      } else if (saved.type === "Terrain" && saved.url) {
        managed = await addTerrainLayer(
          saved.id,
          saved.url,
          saved.terrainEncoding ?? "terrarium"
        );
      } else if (saved.type === "3D Tiles" && saved.url) {
        managed = await add3DTilesLayer(saved.id, saved.url);
      } else if (saved.type === "Model" && saved.url && saved.coordinates) {
        managed = await addModelLayer(
          saved.id,
          saved.url,
          saved.coordinates,
          saved.modelScale ?? 1
        );
      } else if (saved.type === "Vector Tile" && saved.url) {
        managed = await addPbfLayer(saved.id, saved.url);
      } else if (saved.data) {
        managed = await addGeoJson(saved.id, saved.data);
      } else if (saved.url) {
        managed = await addGeoJson(saved.id, saved.url);
      } else {
        continue;
      }

      restored.push({
        ...saved,
        ...managed,
        key: saved.key,
        name: saved.name,
        visible: saved.visible,
        opacity: saved.opacity,
      });
    } catch (error) {
      console.warn(`Unable to restore layer ${saved.name}:`, error);
    }
  }

  workspace.restoreSnapshot({ ...snapshot, layers: restored });
  for (const layer of restored) {
    setManagedLayerVisibility(layer, layer.visible);
    setManagedLayerOpacity(layer, layer.opacity);
    applyManagedLayerStyle(layer);
  }
  applyManagedLayerOrder(restored);
}

async function initializeWorkspace() {
  registerMapEvents();

  let snapshot: WorkspaceSnapshot | null = null;
  try {
    snapshot = await loadWorkspaceSnapshot();
  } catch (error) {
    console.error("Unable to load workspace:", error);
  }

  if (snapshot) {
    await restoreWorkspace(snapshot);
  } else {
    showOnboarding.value = true;
  }

  history.reset(cloneSnapshot(workspace.snapshot()));
  persistenceReady = true;
}

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return target.matches("input, textarea, select")
    || target.isContentEditable
    || Boolean(target.closest(".cm-editor"));
}

function onKeyDown(event: KeyboardEvent) {
  const modifier = event.ctrlKey || event.metaKey;
  const key = event.key.toLowerCase();

  if (modifier && key === "z" && !isEditableTarget(event.target)) {
    event.preventDefault();
    if (event.shiftKey) void redo();
    else void undo();
    return;
  }
  if (modifier && key === "y" && !isEditableTarget(event.target)) {
    event.preventDefault();
    void redo();
    return;
  }
  if (modifier && key === "s") {
    event.preventDefault();
    exportProject();
    return;
  }
  if (modifier && key === "o") {
    event.preventDefault();
    chooseProjectFile();
    return;
  }
  if (event.key === "Escape") {
    stopDrawing();
    selectedFeature.value = undefined;
  }
}

onMounted(() => {
  window.addEventListener("keydown", onKeyDown);
  const setup = () => {
    void initializeWorkspace();
  };

  if (map?.loaded()) {
    setup();
  } else {
    map?.once("load", setup);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeyDown);
  clearTimeout(editorTimer);
  clearTimeout(saveTimer);
  if (pointerFrame !== undefined) cancelAnimationFrame(pointerFrame);
  if (mapEventsReady) {
    map.off("click", onMapClick);
    map.off("mousemove", onPointerMove);
  }
  if (draw) {
    (map as unknown as DrawEventMap).off("draw.create", onDrawCreated);
    (map as unknown as DrawEventMap).off("draw.update", onDrawUpdated);
    map.removeControl(draw as unknown as IControl);
    draw = undefined;
  }
});
</script>

<style scoped>
.workspace-shell {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #10151d;
}

.workspace-main {
  min-height: 0;
  flex: 1;
  display: grid;
  grid-template-columns: 360px minmax(0, 1fr) 430px;
  transition: grid-template-columns 180ms ease;
}

.workspace-main.layers-collapsed {
  grid-template-columns: 0 minmax(0, 1fr) 430px;
}

.workspace-main.editor-collapsed {
  grid-template-columns: 360px minmax(0, 1fr) 0;
}

.workspace-main.layers-collapsed.editor-collapsed {
  grid-template-columns: 0 minmax(0, 1fr) 0;
}

.layers-panel,
.editor-panel {
  min-width: 0;
  overflow: hidden;
  background: #191923;
}

.layers-panel {
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}

.editor-panel {
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  padding: 12px;
}

.map-pane {
  position: relative;
  min-width: 0;
  overflow: hidden;
  background: #0e1820;
}

.draw-toolbar {
  position: absolute;
  z-index: 8;
  top: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9px;
  background: rgba(25, 25, 35, 0.92);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(10px);
}

.draw-toolbar-label {
  padding: 0 6px;
  color: rgba(255, 255, 255, 0.45);
  font-size: 10px;
  letter-spacing: 0.08em;
}

.draw-toolbar button {
  min-width: 36px;
  height: 30px;
  padding: 0 10px;
  border: 0;
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.78);
  background: transparent;
  cursor: pointer;
}

.draw-toolbar button:hover,
.draw-toolbar button.active {
  color: #0f1720;
  background: #5eead4;
}

.map-empty-state {
  position: absolute;
  z-index: 6;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: calc(100% - 32px);
  padding: 7px 8px 7px 12px;
  color: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  background: rgba(17, 24, 39, 0.9);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.24);
  font-size: 11px;
  white-space: nowrap;
  pointer-events: none;
  backdrop-filter: blur(10px);
}

.map-empty-state button {
  padding: 4px 9px;
  color: #0f1720;
  border: 0;
  border-radius: 999px;
  background: #5eead4;
  font-size: 11px;
  cursor: pointer;
  pointer-events: auto;
}

.onboarding p {
  margin: 0 0 18px;
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.7;
}

.onboarding-options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.onboarding-option {
  min-height: 128px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  color: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  cursor: pointer;
  transition: border-color 160ms ease, background 160ms ease, transform 160ms ease;
}

.onboarding-option:hover {
  transform: translateY(-2px);
  border-color: rgba(94, 234, 212, 0.55);
  background: rgba(94, 234, 212, 0.07);
}

.onboarding-option.accent {
  border-color: rgba(94, 234, 212, 0.44);
}

.onboarding-option-title {
  color: rgba(255, 255, 255, 0.94);
  font-size: 16px;
  font-weight: 600;
}

.editor-tabs {
  height: 100%;
}

.editor-tabs :deep(.ant-tabs-content-holder),
.editor-tabs :deep(.ant-tabs-content),
.editor-tabs :deep(.ant-tabs-tabpane) {
  height: 100%;
}

.editor-empty {
  min-height: 240px;
  display: grid;
  place-content: center;
  padding: 24px;
  text-align: center;
  opacity: 0.55;
}

.editor-empty p {
  max-width: 260px;
  margin: 8px 0 0;
  line-height: 1.6;
}

@media (max-width: 1180px) {
  .workspace-main {
    grid-template-columns: 320px minmax(0, 1fr) 360px;
  }

  .workspace-main.layers-collapsed {
    grid-template-columns: 0 minmax(0, 1fr) 360px;
  }

  .workspace-main.editor-collapsed {
    grid-template-columns: 320px minmax(0, 1fr) 0;
  }
}

@media (max-width: 900px) {
  .workspace-main,
  .workspace-main.layers-collapsed,
  .workspace-main.editor-collapsed,
  .workspace-main.layers-collapsed.editor-collapsed {
    position: relative;
    display: block;
  }

  .map-pane {
    position: absolute;
    inset: 0;
  }

  .layers-panel {
    position: absolute;
    z-index: 20;
    inset: 0 auto 0 0;
    width: min(360px, 88vw);
    box-shadow: 20px 0 50px rgba(0, 0, 0, 0.35);
  }

  .layers-collapsed .layers-panel,
  .editor-collapsed .editor-panel {
    display: none;
  }

  .editor-panel {
    position: absolute;
    z-index: 19;
    inset: 0 0 0 auto;
    width: min(430px, 92vw);
    box-shadow: -20px 0 50px rgba(0, 0, 0, 0.35);
  }
}

@media (max-width: 600px) {
  .onboarding-options {
    grid-template-columns: 1fr;
  }

  .map-empty-state {
    width: calc(100% - 24px);
    justify-content: space-between;
    white-space: normal;
  }
}
</style>
