export type WorkspaceLayerType = "GeoJSON" | "XYZ-Tile" | "Vector Tile" | "FlatGeobuf";

export type LayerBounds = [number, number, number, number];

export interface LayerStyle {
  color: string;
  lineWidth: number;
  pointRadius: number;
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
