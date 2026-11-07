import { computed, ref } from "vue";
import type {
  InspectedFeature,
  LayerStyle,
  ManagedLayer,
  WorkspaceLayer,
  WorkspaceSnapshot,
} from "../types/workspace";

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
  };
  layers.value.push(workspaceLayer);
  activeLayerKey.value = workspaceLayer.key;
  return workspaceLayer;
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
  return {
    version: 1,
    projectName: projectName.value,
    activeLayerKey: activeLayerKey.value,
    layers: layers.value,
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
    removeLayer,
    moveLayer,
    clearLayers,
    snapshot,
    restoreSnapshot,
  };
}
