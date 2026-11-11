import type { Layer } from "@deck.gl/core";
import type { MapLibreOverlay } from "@deck.gl/maplibre";
import type { IControl, Map as MapLibreMap } from "maplibre-gl";
import type { LayerLoadStatus } from "../types/workspace";
import {
  createLayerLoadStatus,
  updateLayerLoadStatus,
} from "./LayerLoadStatus";

interface DeckLayerRecord {
  id: string;
  layer: Layer;
  visible: boolean;
  opacity: number;
  loadStatus?: LayerLoadStatus;
}

type DeckModules = {
  overlay: MapLibreOverlay;
  Tile3DLayer: typeof import("@deck.gl/geo-layers").Tile3DLayer;
  ScenegraphLayer: typeof import("@deck.gl/mesh-layers").ScenegraphLayer;
  Tiles3DLoader: typeof import("@loaders.gl/3d-tiles").Tiles3DLoader;
};

let modules: DeckModules | undefined;
const records = new Map<string, DeckLayerRecord>();

function getDecoderModules() {
  const assetUrl = (path: string) =>
    new URL(`${import.meta.env.BASE_URL}loaders.gl/${path}`, window.location.href).href;

  return {
    "draco_wasm_wrapper.js": assetUrl("draco/draco_wasm_wrapper.js"),
    "draco_decoder.wasm": assetUrl("draco/draco_decoder.wasm"),
    "basis_encoder.js": assetUrl("textures/basis_encoder.js"),
    "basis_encoder.wasm": assetUrl("textures/basis_encoder.wasm"),
  };
}

async function loadModelScenegraph(url: string) {
  const [{ load }, { GLTFLoader }] = await Promise.all([
    import("@loaders.gl/core"),
    import("@loaders.gl/gltf"),
  ]);
  return load(url, GLTFLoader, {
    useLocalLibraries: true,
    modules: getDecoderModules(),
  });
}

async function ensureOverlay(mapInstance: MapLibreMap) {
  if (modules) return modules;

  const [
    { MapLibreOverlay },
    { Tile3DLayer },
    { ScenegraphLayer },
    { Tiles3DLoader },
  ] = await Promise.all([
    import("@deck.gl/maplibre"),
    import("@deck.gl/geo-layers"),
    import("@deck.gl/mesh-layers"),
    import("@loaders.gl/3d-tiles"),
  ]);

  const overlay = new MapLibreOverlay({
    interleaved: true,
    layers: [],
  });
  mapInstance.addControl(overlay as unknown as IControl);
  modules = {
    overlay,
    Tile3DLayer,
    ScenegraphLayer,
    Tiles3DLoader,
  };
  return modules;
}

function syncLayers() {
  if (!modules) return;
  modules.overlay.setProps({
    layers: [...records.values()]
      .filter((record) => record.visible)
      .map((record) => record.layer.clone({
        visible: true,
        opacity: record.opacity,
      }) as Layer),
  });
}

export async function add3DTilesDeckLayer(
  mapInstance: MapLibreMap,
  id: string,
  url: string,
  loadStatus = createLayerLoadStatus("loading")
) {
  const { Tile3DLayer, Tiles3DLoader } = await ensureOverlay(mapInstance);
  updateLayerLoadStatus(loadStatus, {
    phase: "loading",
    message: "正在加载 tileset",
    loadedTiles: 0,
    failedTiles: 0,
  });
  return new Promise<{
    coordinates: [number, number, number];
    zoom: number;
  } | undefined>((resolve) => {
    const timeout = setTimeout(() => {
      updateLayerLoadStatus(loadStatus, {
        phase: "error",
        message: "Tileset 加载超时",
      });
      resolve(undefined);
    }, 15_000);
    const layer = new Tile3DLayer({
      id,
      data: url,
      loaders: [Tiles3DLoader],
      loadOptions: {
        useLocalLibraries: true,
        modules: getDecoderModules(),
        "3d-tiles": {
          loadGLTF: true,
          decodeQuantizedPositions: true,
        },
      },
      pickable: false,
      onTilesetLoad: (tileset) => {
        clearTimeout(timeout);
        updateLayerLoadStatus(loadStatus, {
          phase: "ready",
          message: "Tileset 已加载",
        });
        const center = tileset.cartographicCenter;
        if (!center) {
          resolve(undefined);
          return;
        }
        const zoom = Math.min(tileset.zoom, 18);
        mapInstance.flyTo({
          center: [center[0], center[1]],
          zoom,
          pitch: 45,
          duration: 1200,
        });
        resolve({
          coordinates: [center[0], center[1], center[2] ?? 0],
          zoom,
        });
      },
      onTileLoad: () => {
        loadStatus.loadedTiles += 1;
        updateLayerLoadStatus(loadStatus, {
          phase: loadStatus.failedTiles > 0 ? "partial" : "ready",
          message: loadStatus.failedTiles > 0
            ? `已加载 ${loadStatus.loadedTiles} 个瓦片，${loadStatus.failedTiles} 个失败`
            : `已加载 ${loadStatus.loadedTiles} 个瓦片`,
        });
      },
      onTileError: (tile, tileUrl, message) => {
        loadStatus.failedTiles += 1;
        updateLayerLoadStatus(loadStatus, {
          phase: loadStatus.loadedTiles > 0 ? "partial" : "error",
          message: `瓦片加载失败：${message || tileUrl || tile?.id || "未知错误"}`,
        });
        console.error("3D Tiles tile failed", {
          id: tile?.id,
          url: tileUrl,
          message,
        });
      },
      onError: (error) => {
        clearTimeout(timeout);
        updateLayerLoadStatus(loadStatus, {
          phase: "error",
          message: error.message,
        });
        console.error("3D Tiles layer failed", error);
      },
    });
    records.set(id, { id, layer, visible: true, opacity: 1, loadStatus });
    syncLayers();
  });
}

export async function addModelDeckLayer(
  mapInstance: MapLibreMap,
  id: string,
  url: string,
  coordinates: [number, number, number],
  scale = 1,
  loadStatus = createLayerLoadStatus("loading")
) {
  const { ScenegraphLayer } = await ensureOverlay(mapInstance);
  updateLayerLoadStatus(loadStatus, {
    phase: "loading",
    message: "正在加载模型",
    loadedTiles: 0,
    failedTiles: 0,
  });
  let scenegraph: unknown;
  try {
    scenegraph = await loadModelScenegraph(url);
    updateLayerLoadStatus(loadStatus, {
      phase: "ready",
      message: "模型已加载",
      loadedTiles: 1,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    updateLayerLoadStatus(loadStatus, {
      phase: "error",
      message,
    });
    throw error;
  }
  const layer = createModelLayer(
    ScenegraphLayer,
    id,
    scenegraph,
    coordinates,
    scale
  );
  records.set(id, { id, layer, visible: true, opacity: 1, loadStatus });
  syncLayers();
}

function createModelLayer(
  ScenegraphLayer: DeckModules["ScenegraphLayer"],
  id: string,
  scenegraph: unknown,
  coordinates: [number, number, number],
  scale: number
) {
  return new ScenegraphLayer({
    id,
    data: [{ position: coordinates }],
    scenegraph,
    getPosition: (item: { position: [number, number, number] }) => item.position,
    getOrientation: () => [0, 0, 0],
    getScale: () => [scale, scale, scale],
    sizeMinPixels: 0.1,
    _lighting: "pbr",
    pickable: false,
    onError: (error: Error) => {
      console.error("Model layer failed", error);
    },
  });
}

export async function updateModelDeckLayer(
  mapInstance: MapLibreMap,
  id: string,
  url: string,
  coordinates: [number, number, number],
  scale: number
) {
  const record = records.get(id);
  if (!record) return false;
  const { ScenegraphLayer } = await ensureOverlay(mapInstance);
  const loadStatus = record.loadStatus ?? createLayerLoadStatus("loading");
  updateLayerLoadStatus(loadStatus, {
    phase: "loading",
    message: "正在重新加载模型",
  });
  record.loadStatus = loadStatus;
  try {
    const scenegraph = await loadModelScenegraph(url);
    updateLayerLoadStatus(loadStatus, {
      phase: "ready",
      message: "模型已加载",
      loadedTiles: 1,
    });
    record.layer = createModelLayer(
      ScenegraphLayer,
      id,
      scenegraph,
      coordinates,
      scale
    );
  } catch (error) {
    updateLayerLoadStatus(loadStatus, {
      phase: "error",
      message: error instanceof Error ? error.message : String(error),
    });
    throw error;
  }
  syncLayers();
  return true;
}

export function setDeckLayerVisibility(id: string, visible: boolean) {
  const record = records.get(id);
  if (!record) return false;
  record.visible = visible;
  syncLayers();
  return true;
}

export function setDeckLayerOpacity(id: string, opacity: number) {
  const record = records.get(id);
  if (!record) return false;
  record.opacity = Math.min(1, Math.max(0, opacity));
  syncLayers();
  return true;
}

export function removeDeckLayer(id: string) {
  const changed = records.delete(id);
  if (changed) syncLayers();
  return changed;
}

export function reorderDeckLayers(orderedIds: string[]) {
  const next = new Map<string, DeckLayerRecord>();
  for (const id of orderedIds) {
    const record = records.get(id);
    if (record) next.set(id, record);
  }
  for (const [id, record] of records) {
    if (!next.has(id)) next.set(id, record);
  }
  records.clear();
  for (const [id, record] of next) records.set(id, record);
  syncLayers();
}

export function hasDeckLayer(id: string) {
  return records.has(id);
}

export function disposeDeckOverlay(mapInstance: MapLibreMap) {
  if (!modules) return;
  mapInstance.removeControl(modules.overlay as unknown as IControl);
  records.clear();
  modules = undefined;
}
