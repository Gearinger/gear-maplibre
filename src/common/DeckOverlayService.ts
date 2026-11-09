import type { Layer } from "@deck.gl/core";
import type { MapLibreOverlay } from "@deck.gl/maplibre";
import type { IControl, Map as MapLibreMap } from "maplibre-gl";

interface DeckLayerRecord {
  id: string;
  layer: Layer;
  visible: boolean;
  opacity: number;
}

type DeckModules = {
  overlay: MapLibreOverlay;
  Tile3DLayer: typeof import("@deck.gl/geo-layers").Tile3DLayer;
  ScenegraphLayer: typeof import("@deck.gl/mesh-layers").ScenegraphLayer;
  Tiles3DLoader: typeof import("@loaders.gl/3d-tiles").Tiles3DLoader;
};

let modules: DeckModules | undefined;
const records = new Map<string, DeckLayerRecord>();

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
  url: string
) {
  const { Tile3DLayer, Tiles3DLoader } = await ensureOverlay(mapInstance);
  return new Promise<{
    coordinates: [number, number, number];
    zoom: number;
  } | undefined>((resolve) => {
    const timeout = setTimeout(() => resolve(undefined), 15_000);
    const layer = new Tile3DLayer({
      id,
      data: url,
      loaders: [Tiles3DLoader],
      loadOptions: {
        "3d-tiles": {
          loadGLTF: true,
          decodeQuantizedPositions: true,
        },
      },
      pickable: false,
      onTilesetLoad: (tileset) => {
        clearTimeout(timeout);
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
      onTileError: (_tile, tileUrl, message) => {
        console.error(`3D Tiles tile failed: ${tileUrl}`, message);
      },
    });
    records.set(id, { id, layer, visible: true, opacity: 1 });
    syncLayers();
  });
}

export async function addModelDeckLayer(
  mapInstance: MapLibreMap,
  id: string,
  url: string,
  coordinates: [number, number, number],
  scale = 1
) {
  const { ScenegraphLayer } = await ensureOverlay(mapInstance);
  const layer = createModelLayer(
    ScenegraphLayer,
    id,
    url,
    coordinates,
    scale
  );
  records.set(id, { id, layer, visible: true, opacity: 1 });
  syncLayers();
}

function createModelLayer(
  ScenegraphLayer: DeckModules["ScenegraphLayer"],
  id: string,
  url: string,
  coordinates: [number, number, number],
  scale: number
) {
  return new ScenegraphLayer({
    id,
    data: [{ position: coordinates }],
    scenegraph: url,
    getPosition: (item: { position: [number, number, number] }) => item.position,
    getOrientation: () => [0, 0, 0],
    getScale: () => [scale, scale, scale],
    sizeMinPixels: 0.1,
    _lighting: "pbr",
    pickable: false,
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
  record.layer = createModelLayer(ScenegraphLayer, id, url, coordinates, scale);
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
