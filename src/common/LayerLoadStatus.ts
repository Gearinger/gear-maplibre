import type { LayerLoadPhase, LayerLoadStatus } from "../types/workspace";

export function createLayerLoadStatus(
  phase: LayerLoadPhase,
  message?: string
): LayerLoadStatus {
  return {
    phase,
    message,
    loadedTiles: 0,
    failedTiles: 0,
    updatedAt: new Date().toISOString(),
  };
}

export function updateLayerLoadStatus(
  status: LayerLoadStatus,
  patch: Partial<Omit<LayerLoadStatus, "updatedAt">>
) {
  Object.assign(status, patch, { updatedAt: new Date().toISOString() });
}

export function getLayerLoadStatusLabel(status?: LayerLoadStatus) {
  switch (status?.phase) {
    case "loading":
      return "加载中";
    case "partial":
      return status.failedTiles > 0 ? `部分失败 (${status.failedTiles})` : "部分可用";
    case "error":
      return "加载失败";
    case "ready":
    default:
      return "可用";
  }
}

export function isLayerLoadFailure(status?: LayerLoadStatus) {
  return status?.phase === "error" || status?.phase === "partial";
}
