import { computed, ref, toRaw } from "vue";
import type {
  InspectedFeature,
  LayerLoadStatus,
  LayerStyle,
  ManagedLayer,
  WorkspaceLayer,
  WorkspaceSnapshot,
} from "../types/workspace";
import { createLayerLoadStatus, updateLayerLoadStatus } from "../common/LayerLoadStatus";

const projectName = ref("未命名地图");
const layers = ref<WorkspaceLayer[]>([]);
const activeLayerKey = ref("");
const selectedFeature = ref<InspectedFeature>();
const leftPanelOpen = ref(true);
const rightPanelOpen = ref(true);
const rightPanelTab = ref<"feature" | "json" | "style">("json");
const saving = ref(false);

const defaultLayerStyle: LayerStyle = {
  color: "#38bdf8",
  lineWidth: 2,
  pointRadius: 5,
};

function createKey() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

const activeLayer = computed(() =>
  layers.value.find((layer) => layer.key === activeLayerKey.value)
);

function addLayer(layer: ManagedLayer, name = layer.id) {
  const workspaceLayer: WorkspaceLayer = {
    ...layer,
    key: createKey(),
    name: name || layer.id,
    visible: true,
    opacity: 1,
    style: { ...defaultLayerStyle },
    loadStatus: layer.loadStatus ?? createLayerLoadStatus("ready"),
  };
  layers.value.push(workspaceLayer);
  activeLayerKey.value = workspaceLayer.key;
  return workspaceLayer;
}

function setLayerLoadStatus(key: string, status: LayerLoadStatus) {
  const layer = layers.value.find((candidate) => candidate.key === key);
  if (!layer) return false;
  layer.loadStatus = status;
  return true;
}

function patchLayerLoadStatus(
  key: string,
  patch: Partial<Omit<LayerLoadStatus, "updatedAt">>
) {
  const layer = layers.value.find((candidate) => candidate.key === key);
  if (!layer) return false;
  const status = layer.loadStatus ?? createLayerLoadStatus("loading");
  updateLayerLoadStatus(status, patch);
  layer.loadStatus = { ...status };
  return true;
}

function removeLayer(key: string) {
  layers.value = layers.value.filter((layer) => layer.key !== key);
  if (activeLayerKey.value === key) {
    activeLayerKey.value = layers.value.at(-1)?.key ?? "";
  }
  if (selectedFeature.value?.layerKey === key) {
    selectedFeature.value = undefined;
  }
}

function clearLayers() {
  layers.value = [];
  activeLayerKey.value = "";
  selectedFeature.value = undefined;
}

function snapshot(): WorkspaceSnapshot {
  const snapshotLayers = layers.value.map((layer) => {
    const plainLayer = toRaw(layer);
    return {
      ...plainLayer,
      style: { ...plainLayer.style },
      loadStatus: plainLayer.loadStatus ? { ...plainLayer.loadStatus } : undefined,
      data: plainLayer.data ? structuredClone(toRaw(plainLayer.data)) : undefined,
      url: plainLayer.assetId ? undefined : plainLayer.url,
    };
  });
  return {
    version: 1,
    projectName: projectName.value,
    activeLayerKey: activeLayerKey.value,
    layers: snapshotLayers,
    savedAt: new Date().toISOString(),
  };
}

function restoreSnapshot(value: WorkspaceSnapshot) {
  projectName.value = value.projectName || "未命名地图";
  layers.value = (value.layers ?? []).map((layer) => ({
    ...layer,
    opacity: layer.opacity ?? 1,
    style: {
      ...defaultLayerStyle,
      ...layer.style,
    },
    loadStatus: layer.loadStatus ?? createLayerLoadStatus("ready"),
  }));
  activeLayerKey.value =
    layers.value.find((layer) => layer.key === value.activeLayerKey)?.key
    ?? layers.value.at(-1)?.key
    ?? "";
  selectedFeature.value = undefined;
}

function moveLayer(key: string, offset: -1 | 1) {
  const index = layers.value.findIndex((layer) => layer.key === key);
  const target = index + offset;
  if (index < 0 || target < 0 || target >= layers.value.length) return false;
  const next = [...layers.value];
  const [layer] = next.splice(index, 1);
  next.splice(target, 0, layer);
  layers.value = next;
  return true;
}

export function useWorkspace() {
  return {
    projectName,
    layers,
    activeLayer,
    activeLayerKey,
    selectedFeature,
    leftPanelOpen,
    rightPanelOpen,
    rightPanelTab,
    saving,
    addLayer,
    setLayerLoadStatus,
    patchLayerLoadStatus,
    removeLayer,
    moveLayer,
    clearLayers,
    snapshot,
    restoreSnapshot,
  };
}
