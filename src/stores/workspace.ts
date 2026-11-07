import { computed, ref } from "vue";
import type {
  InspectedFeature,
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
const rightPanelTab = ref<"feature" | "json">("json");
const saving = ref(false);

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
  layers.value = value.layers ?? [];
  activeLayerKey.value =
    layers.value.find((layer) => layer.key === value.activeLayerKey)?.key
    ?? layers.value.at(-1)?.key
    ?? "";
  selectedFeature.value = undefined;
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
    clearLayers,
    snapshot,
    restoreSnapshot,
  };
}
