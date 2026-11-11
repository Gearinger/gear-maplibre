export type WorkspaceLayerType =
  | "GeoJSON"
  | "XYZ-Tile"
  | "Vector Tile"
  | "FlatGeobuf"
  | "PMTiles"
  | "GeoTIFF"
  | "Terrain"
  | "3D Tiles"
  | "Model";

export type LayerBounds = [number, number, number, number];

export interface LayerStyle {
  color: string;
  lineWidth: number;
  pointRadius: number;
}

export type LayerLoadPhase = "loading" | "ready" | "partial" | "error";

export interface LayerLoadStatus {
  phase: LayerLoadPhase;
  message?: string;
  loadedTiles: number;
  failedTiles: number;
  updatedAt: string;
}

export interface ManagedLayer {
  id: string;
  type: WorkspaceLayerType | string;
  source: string;
  styleLayerIds: string[];
  data?: GeoJSON.GeoJSON;
  url?: string;
  featureCount?: number;
  bounds?: LayerBounds;
  engine?: "maplibre" | "deck";
  coordinates?: [number, number, number];
  focusZoom?: number;
  modelScale?: number;
  terrainEncoding?: "mapbox" | "terrarium";
  sourceLayer?: string;
  loadStatus?: LayerLoadStatus;
  assetId?: string;
  assetName?: string;
  assetMimeType?: string;
  assetSize?: number;
}

export interface WorkspaceLayer extends ManagedLayer {
  key: string;
  name: string;
  visible: boolean;
  opacity: number;
  style: LayerStyle;
}

export interface InspectedFeature {
  id?: string | number;
  featureIndex?: number;
  layerKey: string;
  layerName: string;
  source: string;
  geometryType: string;
  properties: GeoJSON.GeoJsonProperties;
  feature: GeoJSON.Feature;
}

export interface WorkspaceSnapshot {
  version: 1;
  projectName: string;
  activeLayerKey: string;
  layers: WorkspaceLayer[];
  savedAt: string;
}
