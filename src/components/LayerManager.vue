<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import {
  GithubOutlined,
  QuestionCircleOutlined,
  DeleteOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  AimOutlined,
  PlusOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  ReloadOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { map } from "../common/MapUtil";
import FileSelect from "./FileSelect.vue";
import {
  addFlatGeoBuf,
  addGeoJson,
  addGeoTiffLayer,
  addModelLayer,
  addPbfLayer,
  addPmtilesLayer,
  addTerrainLayer,
  add3DTilesLayer,
  addTileLayer,
  applyManagedLayerOrder,
  applyManagedLayerStyle,
  fitManagedLayer,
  removeManagedLayer,
  setManagedLayerOpacity,
  setManagedLayerVisibility,
} from "../common/MapLayerUtil";
import { parseGeoJsonAsync } from "../common/GeoJsonParser";
import {
  getWorkspaceAssetObjectUrl,
  releaseWorkspaceAssetObjectUrl,
  storeWorkspaceAsset,
} from "../common/WorkspaceAssets";
import { createLayerLoadStatus } from "../common/LayerLoadStatus";
import {
  getLayerLoadStatusLabel,
  isLayerLoadFailure,
} from "../common/LayerLoadStatus";
import { useWorkspace } from "../stores/workspace";
import type { WorkspaceLayer } from "../types/workspace";

const workspace = useWorkspace();
const {
  layers,
  activeLayerKey,
  selectedFeature,
  projectName,
} = workspace;

/**
 * 图层搜索内容
 */
const searchLayerContent = ref("");
const importVisible = ref(false);
const importing = ref(false);
const activeTab = ref("1");
const editingKey = ref("");
const editingName = ref("");

const textModel = reactive({
  type: "GeoJSON",
  content: "",
});

const urlModel = reactive({
  type: "Tile",
  layerName: "layer",
  url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  sourceLayer: "",
  terrainEncoding: "terrarium" as "mapbox" | "terrarium",
  longitude: 103,
  latitude: 38,
  altitude: 0,
  scale: 1,
});

const filteredLayerList = computed(() => {
  const query = searchLayerContent.value.trim().toLowerCase();
  if (!query) return layers.value;
  return layers.value.filter((layer) =>
    [layer.name, layer.id, layer.type, layer.source].some((value) =>
      value?.toLowerCase().includes(query)
    )
  );
});

const layerFields = [
  {
    title: "图层",
    dataIndex: "name",
    width: 130,
    slots: { customRender: "name" },
  },
  {
    title: "类型",
    dataIndex: "type",
    width: 75,
    align: "center",
    slots: { customRender: "type" },
  },
  {
    title: "要素",
    dataIndex: "featureCount",
    width: 50,
    align: "center",
  },
  {
    title: "透明度",
    dataIndex: "opacity",
    width: 85,
    align: "center",
    slots: { customRender: "opacity" },
  },
  {
    title: "操作",
    width: 100,
    align: "center",
    dataIndex: "operation",
    slots: { customRender: "operation" },
  },
];

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}

function getUniqueLayerName(baseName: string) {
  const normalized = baseName.trim() || "layer";
  let candidate = normalized;
  let suffix = 1;
  while (
    map.getSource(candidate) ||
    (map.getStyle().layers ?? []).some((layer) => layer.id === candidate) ||
    layers.value.some((layer) => layer.id === candidate)
  ) {
    candidate = `${normalized}-${suffix++}`;
  }
  return candidate;
}

function registerLayer(managed: Awaited<ReturnType<typeof addGeoJson>>, name: string) {
  const layer = workspace.addLayer(managed, name);
  applyManagedLayerStyle(layer);
  applyManagedLayerOrder(layers.value);
  if (layer.type !== "GeoJSON" && layer.bounds) {
    fitManagedLayer(layer);
  }
  return layer;
}

function hasPendingLayerLoads() {
  return layers.value.some((layer) => layer.loadStatus?.phase === "loading");
}

async function loadLocalFiles(files: File[]) {
  importing.value = true;
  let loaded = 0;
  const failures: string[] = [];
  try {
    for (const file of files) {
      const displayName = file.name.replace(/\.[^.]+$/, "");
      const sourceName = getUniqueLayerName(displayName);
      const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
      try {
        if (ext === "json" || ext === "geojson") {
          const data = await parseGeoJsonAsync(await file.text());
          registerLayer(await addGeoJson(sourceName, data), displayName);
        } else if (ext === "fgb") {
          registerLayer(
            await addFlatGeoBuf(new Uint8Array(await file.arrayBuffer()), sourceName),
            displayName
          );
        } else if (ext === "glb" || ext === "gltf") {
          const contentType = ext === "glb" ? "model/gltf-binary" : "model/gltf+json";
          if (ext === "gltf") {
            const json = JSON.parse(await file.text()) as {
              buffers?: Array<{ uri?: string }>;
              images?: Array<{ uri?: string }>;
            };
            const externalUri = [...(json.buffers ?? []), ...(json.images ?? [])]
              .find((resource) => resource.uri && !resource.uri.startsWith("data:"));
            if (externalUri) {
              throw new Error("本地 .gltf 引用了外部资源，请改用 GLB 或完整 URL");
            }
          }
          const typedFile = new File([file], file.name, { type: contentType });
          const asset = await storeWorkspaceAsset(typedFile);
          const modelUrl = await getWorkspaceAssetObjectUrl(asset.id);
          const managed = await addModelLayer(
            sourceName,
            modelUrl,
            [map.getCenter().lng, map.getCenter().lat, 0],
            1
          );
          managed.assetId = asset.id;
          managed.assetName = asset.name;
          managed.assetMimeType = asset.type;
          managed.assetSize = asset.size;
          registerLayer(managed, displayName);
        } else {
          throw new Error(`暂不支持文件格式：.${ext}`);
        }
        loaded++;
      } catch (error) {
        failures.push(`${file.name}: ${getErrorMessage(error)}`);
      }
    }
  } finally {
    importing.value = false;
  }

  if (loaded > 0) {
    importVisible.value = false;
    message.success(
      hasPendingLayerLoads()
        ? `已加入 ${loaded} 个文件，图层仍在加载`
        : `已加载 ${loaded} 个文件`
    );
  }
  if (failures.length > 0) {
    message.error(failures.join("；"));
  }
}

async function deleteLayer(layer: WorkspaceLayer) {
  try {
    removeManagedLayer(layer);
    releaseWorkspaceAssetObjectUrl(layer.assetId);
    workspace.removeLayer(layer.key);
    message.success("图层删除成功！");
  } catch (error) {
    message.error(`图层删除失败：${getErrorMessage(error)}`);
  }
}

async function retryLayer(layer: WorkspaceLayer) {
  if (layer.loadStatus?.phase !== "error" && layer.loadStatus?.phase !== "partial") {
    return;
  }

  try {
    removeManagedLayer(layer);
    let managed: Awaited<ReturnType<typeof addGeoJson>>;

    if (layer.type === "3D Tiles" && layer.url) {
      managed = await add3DTilesLayer(layer.id, layer.url);
    } else if (layer.type === "Model") {
      const modelUrl = layer.assetId
        ? await getWorkspaceAssetObjectUrl(layer.assetId)
        : layer.url;
      if (!modelUrl || !layer.coordinates) {
        throw new Error("模型资源或位置信息不完整");
      }
      managed = await addModelLayer(
        layer.id,
        modelUrl,
        layer.coordinates,
        layer.modelScale ?? 1
      );
    } else if (layer.type === "Vector Tile" && layer.url) {
      managed = await addPbfLayer(layer.id, layer.url, layer.sourceLayer);
    } else if (layer.type === "PMTiles" && layer.url) {
      managed = await addPmtilesLayer(layer.id, layer.url);
    } else if (layer.type === "GeoTIFF" && layer.url) {
      managed = await addGeoTiffLayer(layer.id, layer.url);
    } else if (layer.type === "Terrain" && layer.url) {
      managed = await addTerrainLayer(
        layer.id,
        layer.url,
        layer.terrainEncoding ?? "terrarium"
      );
    } else if (layer.type === "XYZ-Tile" && layer.url) {
      managed = await addTileLayer(layer.id, layer.url);
    } else if (layer.type === "FlatGeobuf" && layer.data) {
      managed = {
        ...await addGeoJson(layer.id, layer.data),
        type: "FlatGeobuf",
      };
    } else if (layer.data) {
      managed = await addGeoJson(layer.id, layer.data);
    } else if (layer.url) {
      managed = await addGeoJson(layer.id, layer.url);
    } else {
      throw new Error("图层缺少可重试的数据或 URL");
    }

    Object.assign(layer, managed, {
      key: layer.key,
      name: layer.name,
      visible: layer.visible,
      opacity: layer.opacity,
      style: layer.style,
      loadStatus: managed.loadStatus ?? createLayerLoadStatus("ready"),
    });
    setManagedLayerVisibility(layer, layer.visible);
    setManagedLayerOpacity(layer, layer.opacity);
    applyManagedLayerStyle(layer);
    applyManagedLayerOrder(layers.value);
    if (layer.bounds) fitManagedLayer(layer);
    message.success("图层重试成功");
  } catch (error) {
    layer.loadStatus = createLayerLoadStatus("error", getErrorMessage(error));
    message.error(`图层重试失败：${getErrorMessage(error)}`);
  }
}

async function importMartinCatalog(catalogUrl: string) {
  const response = await fetch(catalogUrl);
  if (!response.ok) throw new Error(`Martin Catalog 请求失败：${response.status}`);

  const catalog = await response.json() as {
    tiles?: Record<string, { content_type?: string }>;
  };
  const layerMap = catalog.tiles ?? {};
  let loaded = 0;

  for (const layerName of Object.keys(layerMap)) {
    if (layerMap[layerName].content_type !== "application/x-protobuf") continue;
    const uniqueName = getUniqueLayerName(layerName);
    const tileUrl = catalogUrl.replace(/catalog\/?$/, uniqueName);
    registerLayer(await addPbfLayer(uniqueName, tileUrl), layerName);
    loaded++;
  }

  if (loaded === 0) throw new Error("Martin Catalog 中没有可用的 PBF 图层");
}

async function createUrlLayer(layerName: string): Promise<Awaited<ReturnType<typeof addGeoJson>>> {
  switch (urlModel.type) {
    case "Tile":
      return addTileLayer(layerName, urlModel.url);
    case "Vector Tile":
      return addPbfLayer(
        layerName,
        urlModel.url,
        urlModel.sourceLayer.trim() || undefined
      );
    case "GeoJSON":
      return addGeoJson(layerName, urlModel.url);
    case "FlatGeobuf":
      return addFlatGeoBuf(urlModel.url, layerName);
    case "PMTiles":
      return addPmtilesLayer(layerName, urlModel.url);
    case "GeoTIFF":
      return addGeoTiffLayer(layerName, urlModel.url);
    case "Terrain":
      return addTerrainLayer(layerName, urlModel.url, urlModel.terrainEncoding);
    case "3D Tiles":
      return add3DTilesLayer(layerName, urlModel.url);
    case "Model": {
      const modelUrl = urlModel.url;
      if (!modelUrl) throw new Error("请填写模型 URL");
      return addModelLayer(
        layerName,
        modelUrl,
        [urlModel.longitude, urlModel.latitude, urlModel.altitude],
        urlModel.scale
      );
    }
    default:
      throw new Error(`暂不支持图层类型：${urlModel.type}`);
  }
}

async function importfinish() {
  if (activeTab.value === "1") {
    importVisible.value = false;
    return;
  }

  importing.value = true;
  try {
    if (activeTab.value === "2") {
      if (urlModel.type === "Martin Catalog") {
        await importMartinCatalog(urlModel.url);
      } else {
        const layerName = getUniqueLayerName(urlModel.layerName);
        const layer = await createUrlLayer(layerName);
        registerLayer(layer, urlModel.layerName || layer.id);
      }
    } else if (activeTab.value === "3") {
      const json = await parseGeoJsonAsync(textModel.content);
      const layerName = getUniqueLayerName(`geojson-${Date.now()}`);
      registerLayer(await addGeoJson(layerName, json), "粘贴的 GeoJSON");
    }

    importVisible.value = false;
    message.success(
      hasPendingLayerLoads()
        ? "图层已加入，正在后台加载"
        : "图层导入成功！"
    );
  } catch (error) {
    message.error(`图层导入失败：${getErrorMessage(error)}`);
  } finally {
    importing.value = false;
  }
}

function setActiveLayer(layer: WorkspaceLayer) {
  activeLayerKey.value = layer.key;
  selectedFeature.value = undefined;
}

function rowProps(layer: WorkspaceLayer) {
  return {
    onClick: () => setActiveLayer(layer),
    class: layer.key === activeLayerKey.value ? "active-layer-row" : "",
  };
}

function toggleVisibility(layer: WorkspaceLayer) {
  layer.visible = !layer.visible;
  setManagedLayerVisibility(layer, layer.visible);
}

function changeOpacity(event: Event, layer: WorkspaceLayer) {
  const value = Number((event.target as HTMLInputElement).value) / 100;
  layer.opacity = value;
  setManagedLayerOpacity(layer, value);
}

function focusLayer(layer: WorkspaceLayer) {
  setActiveLayer(layer);
  if (!fitManagedLayer(layer)) {
    message.info("该图层没有可用的范围信息");
  }
}

function moveLayer(layer: WorkspaceLayer, offset: -1 | 1) {
  if (workspace.moveLayer(layer.key, offset)) {
    applyManagedLayerOrder(layers.value);
  }
}

function startRename(layer: WorkspaceLayer) {
  editingKey.value = layer.key;
  editingName.value = layer.name;
}

function commitRename(layer: WorkspaceLayer) {
  const name = editingName.value.trim();
  if (name) layer.name = name;
  editingKey.value = "";
}

function githubHandle() {
  window.open("https://github.com/Gearinger");
}

function helpHandle() {
  message.info("支持 GeoJSON、FlatGeobuf、PMTiles、GeoTIFF、地形、3D Tiles、模型和瓦片服务。");
}
</script>

<template>
  <div class="layer-manager">
    <div class="layer-manager-menu">
      <a-form>
        <a-row class="layer-manager-menu-top">
          <a-col :span="16">
            <div style="font-size: 15px">图层资源</div>
            <div style="font-size: 10px; opacity: 0.6">{{ projectName }}</div>
          </a-col>
          <a-col :span="8" class="layer-manager-menu-top-btn">
            <GithubOutlined @click="githubHandle" />
            <a-tooltip placement="right" title="帮助" :mouseEnterDelay="0.3">
              <QuestionCircleOutlined @click="helpHandle" />
            </a-tooltip>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <div class="layer-manager-layer-list">
      <div class="layer-manager-layer-list-search">
        <a-row>
          <a-col :span="20">
            <a-input v-model:value="searchLayerContent" placeholder="Layer Search..."></a-input>
          </a-col>
          <a-col :span="4">
            <a-button block type="primary" title="导入图层" @click="importVisible = true">
              <template #icon><PlusOutlined /></template>
            </a-button>
            <a-modal v-model:open="importVisible" :confirm-loading="importing" @ok="importfinish">
              <a-tabs size="small" v-model:activeKey="activeTab">
                <a-tab-pane key="1" tab="file">
                  <FileSelect @load-files="loadLocalFiles" />
                </a-tab-pane>
                <a-tab-pane key="2" tab="url" force-render>
                  <a-form :model="urlModel" :label-col="{ span: 5 }" style="margin: 20px">
                    <a-form-item label="type">
                      <a-select v-model:value="urlModel.type" size="small">
                        <a-select-option value="GeoJSON">GeoJSON</a-select-option>
                        <a-select-option value="FlatGeobuf">FlatGeobuf</a-select-option>
                        <a-select-option value="Tile">XYZ-Tile</a-select-option>
                        <a-select-option value="Vector Tile">Vector Tile</a-select-option>
                        <a-select-option value="PMTiles">PMTiles</a-select-option>
                        <a-select-option value="GeoTIFF">GeoTIFF / COG</a-select-option>
                        <a-select-option value="Terrain">地形</a-select-option>
                        <a-select-option value="3D Tiles">3D Tiles</a-select-option>
                        <a-select-option value="Model">glTF / GLB 模型</a-select-option>
                        <a-select-option value="Martin Catalog">Martin Catalog</a-select-option>
                      </a-select>
                    </a-form-item>
                    <a-form-item label="layerName">
                      <a-input v-model:value="urlModel.layerName" size="small"></a-input>
                    </a-form-item>
                    <a-form-item label="url">
                      <a-input v-model:value="urlModel.url" size="small"></a-input>
                      <div v-if="urlModel.type === 'GeoTIFF'" class="field-hint">
                        需要 CORS 可访问的 Cloud Optimized GeoTIFF（COG）
                      </div>
                      <div v-if="urlModel.type === 'Terrain'" class="field-hint">
                        TIFF 地址会自动按 COG DEM 读取
                      </div>
                      <div v-if="urlModel.type === 'Model'" class="field-hint">
                        URL 必须可直接访问模型及 .gltf 引用的外部资源
                      </div>
                    </a-form-item>
                    <a-form-item v-if="urlModel.type === 'Vector Tile'" label="sourceLayer">
                      <a-input v-model:value="urlModel.sourceLayer" size="small"
                        placeholder="TileJSON 中 vector_layers 的 id"></a-input>
                      <div class="field-hint">
                        不填写时使用 layerName；单个 .pbf 地址不能作为底图
                      </div>
                    </a-form-item>
                    <a-form-item v-if="urlModel.type === 'Terrain'" label="encoding">
                      <a-select v-model:value="urlModel.terrainEncoding" size="small">
                        <a-select-option value="terrarium">Terrarium</a-select-option>
                        <a-select-option value="mapbox">Mapbox Terrain RGB</a-select-option>
                      </a-select>
                    </a-form-item>
                    <template v-if="urlModel.type === 'Model'">
                      <a-row :gutter="8">
                        <a-col :span="8">
                          <a-form-item label="经度">
                            <a-input-number v-model:value="urlModel.longitude" :step="0.0001" />
                          </a-form-item>
                        </a-col>
                        <a-col :span="8">
                          <a-form-item label="纬度">
                            <a-input-number v-model:value="urlModel.latitude" :step="0.0001" />
                          </a-form-item>
                        </a-col>
                        <a-col :span="8">
                          <a-form-item label="高度">
                            <a-input-number v-model:value="urlModel.altitude" :step="1" />
                          </a-form-item>
                        </a-col>
                      </a-row>
                      <a-form-item label="缩放">
                        <a-input-number v-model:value="urlModel.scale" :min="0.0001" :step="0.1" />
                      </a-form-item>
                    </template>
                  </a-form>
                </a-tab-pane>
                <a-tab-pane key="3" tab="text" force-render>
                  <a-form :model="textModel" :label-col="{ span: 5 }" style="margin: 20px">
                    <a-form-item label="type">
                      <a-select v-model:value="textModel.type" size="small">
                        <a-select-option value="GeoJSON"></a-select-option>
                      </a-select>
                    </a-form-item>
                    <a-form-item label="content">
                      <a-textarea v-model:value="textModel.content" size="small" style="height: 200px"></a-textarea>
                    </a-form-item>
                  </a-form>
                </a-tab-pane>
              </a-tabs>
            </a-modal>
          </a-col>
        </a-row>
      </div>
      <a-table :dataSource="filteredLayerList" :columns="layerFields" size="small" tableLayout="fixed"
        :pagination="false" :customRow="rowProps" :scroll="{ x: 420 }">
        <template #name="{ record }">
          <div class="layer-name-cell" @dblclick.stop="startRename(record)">
            <button class="visibility-button" :title="record.visible ? '隐藏图层' : '显示图层'"
              @click.stop="toggleVisibility(record)">
              <EyeOutlined v-if="record.visible" />
              <EyeInvisibleOutlined v-else />
            </button>
            <a-input v-if="editingKey === record.key" v-model:value="editingName" size="small"
              @click.stop @blur="commitRename(record)" @pressEnter="commitRename(record)" />
            <span v-else class="layer-name">{{ record.name }}</span>
          </div>
        </template>
        <template #type="{ record }">
          <div class="layer-type-cell">
            <span>{{ record.type }}</span>
            <a-tooltip v-if="record.loadStatus?.phase !== 'ready'"
              :title="record.loadStatus?.message || getLayerLoadStatusLabel(record.loadStatus)">
              <span class="layer-load-status" :class="{
                loading: record.loadStatus?.phase === 'loading',
                failed: isLayerLoadFailure(record.loadStatus),
              }">
                {{ getLayerLoadStatusLabel(record.loadStatus) }}
              </span>
            </a-tooltip>
          </div>
        </template>
        <template #opacity="{ record }">
          <input class="opacity-input" type="range" min="0" max="100" :value="record.opacity * 100"
            @click.stop @input="changeOpacity($event, record)">
        </template>
        <template #operation="{ record }">
          <a-button v-if="isLayerLoadFailure(record.loadStatus)" title="重试加载"
            size="small" type="text" @click.stop="retryLayer(record)">
            <template #icon><ReloadOutlined /></template>
          </a-button>
          <a-button title="上移图层" size="small" type="text" @click.stop="moveLayer(record, -1)">
            <template #icon><ArrowUpOutlined /></template>
          </a-button>
          <a-button title="下移图层" size="small" type="text" @click.stop="moveLayer(record, 1)">
            <template #icon><ArrowDownOutlined /></template>
          </a-button>
          <a-button title="定位图层" size="small" type="text" @click.stop="focusLayer(record)">
            <template #icon><AimOutlined /></template>
          </a-button>
          <a-button shape="circle" danger size="small" type="text" @click.stop="deleteLayer(record)">
            <template #icon>
              <DeleteOutlined />
            </template>
          </a-button>
        </template>
      </a-table>
    </div>
  </div>
</template>

<style lang="less">
@import "../assets/main.less";

.layer-manager {
  position: relative;
  background-color: @global_bg_color;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.layer-manager-menu-top {
  margin-bottom: 20px;
}

.layer-manager-menu-top-btn {
  text-align: right;
  font-size: 20px;

  * {
    margin-left: 7px;
  }

  * {
    opacity: 0.8;
  }

  *:hover {
    opacity: 1;
  }
}

.layer-manager-menu {
  flex: none;
  padding: 14px 16px;
}

.layer-manager-layer-list {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 12px;
  text-align: center;
  border-top: 1px solid rgb(80, 80, 80);
}

.layer-manager-layer-list-search {
  position: sticky;
  top: 0;
  z-index: 2;
  margin-bottom: 10px;
  padding-bottom: 6px;
  background: @global_bg_color;
}

.layer-name-cell {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
}

.layer-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.layer-type-cell {
  display: grid;
  justify-items: center;
  gap: 2px;
}

.layer-load-status {
  padding: 1px 5px;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.14);
  color: #7dd3fc;
  font-size: 9px;
  line-height: 1.5;
}

.layer-load-status.loading {
  animation: layer-status-pulse 1.2s ease-in-out infinite;
}

.layer-load-status.failed {
  background: rgba(248, 113, 113, 0.14);
  color: #fca5a5;
}

@keyframes layer-status-pulse {
  50% {
    opacity: 0.45;
  }
}

.visibility-button {
  flex: none;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 0;
  color: inherit;
  background: transparent;
  cursor: pointer;
}

.opacity-input {
  width: 64px;
  cursor: pointer;
  accent-color: #38bdf8;
}

.active-layer-row > td {
  background: rgba(56, 189, 248, 0.12) !important;
}

.ant-table-row {
  cursor: pointer;
}

.file-import-area {
  border: 1px dashed rgba(200, 200, 200, 0.3);
  border-radius: 5px;
  height: 200px;
  text-align: center;
  padding: 10px 35px;
  opacity: 0.8;

  &.active {
    opacity: 1;
    border-color: rgb(180, 90, 60);
    color: rgb(180, 90, 60);
  }
}

.file-import-area-icon {
  font-size: 50px;
  padding: 0%;
  margin: 0%;
}

.file-import-area-text {
  font-size: 15px;
  opacity: 0.8;
}

.file-import-area-hint {
  font-size: 9px;
  opacity: 0.5;
}

.field-hint {
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.42);
  font-size: 10px;
  line-height: 1.45;
}
</style>
