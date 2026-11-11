import { describe, expect, test } from "bun:test";
import {
  createLayerLoadStatus,
  getLayerLoadStatusLabel,
  isLayerLoadFailure,
  updateLayerLoadStatus,
} from "./LayerLoadStatus";

describe("layer load status", () => {
  test("formats loading, partial, error, and ready states", () => {
    expect(getLayerLoadStatusLabel(createLayerLoadStatus("loading"))).toBe("加载中");

    const partial = createLayerLoadStatus("ready");
    updateLayerLoadStatus(partial, { phase: "partial", failedTiles: 2 });
    expect(getLayerLoadStatusLabel(partial)).toBe("部分失败 (2)");
    expect(isLayerLoadFailure(partial)).toBe(true);

    const error = createLayerLoadStatus("error", "network unavailable");
    expect(getLayerLoadStatusLabel(error)).toBe("加载失败");
    expect(isLayerLoadFailure(error)).toBe(true);
    expect(isLayerLoadFailure(createLayerLoadStatus("ready"))).toBe(false);
  });
});
