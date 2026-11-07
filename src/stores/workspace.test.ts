import { beforeEach, describe, expect, test } from "bun:test";
import { useWorkspace } from "./workspace";
import type { ManagedLayer, WorkspaceSnapshot } from "../types/workspace";

const geoJsonLayer = (id: string): ManagedLayer => ({
  id,
  type: "GeoJSON",
  source: id,
  styleLayerIds: [`${id}-fill`, `${id}-line`, `${id}-point`],
  data: {
    type: "FeatureCollection",
    features: [],
  },
  featureCount: 0,
});

describe("workspace store", () => {
  const workspace = useWorkspace();

  beforeEach(() => {
    workspace.clearLayers();
    workspace.projectName.value = "测试项目";
    workspace.activeLayerKey.value = "";
  });

  test("adds layers with default display state and style", () => {
    const layer = workspace.addLayer(geoJsonLayer("roads"), "道路");

    expect(workspace.layers.value).toHaveLength(1);
    expect(layer.name).toBe("道路");
    expect(layer.visible).toBe(true);
    expect(layer.opacity).toBe(1);
    expect(layer.style.color).toBe("#38bdf8");
    expect(workspace.activeLayerKey.value).toBe(layer.key);
  });

  test("moves layers and removes the active selection safely", () => {
    const first = workspace.addLayer(geoJsonLayer("first"), "First");
    const second = workspace.addLayer(geoJsonLayer("second"), "Second");

    expect(workspace.moveLayer(first.key, 1)).toBe(true);
    expect(workspace.layers.value.map((layer) => layer.id)).toEqual([
      "second",
      "first",
    ]);

    workspace.removeLayer(second.key);
    expect(workspace.layers.value).toHaveLength(1);
    expect(workspace.activeLayerKey.value).toBe(first.key);
  });

  test("restores snapshots created before style fields were introduced", () => {
    const legacyLayer = {
      ...geoJsonLayer("legacy"),
      key: "legacy-key",
      name: "Legacy",
      visible: false,
      opacity: 0.4,
    };
    const snapshot = {
      version: 1,
      projectName: "旧项目",
      activeLayerKey: "legacy-key",
      layers: [legacyLayer],
      savedAt: new Date().toISOString(),
    } as unknown as WorkspaceSnapshot;

    workspace.restoreSnapshot(snapshot);

    expect(workspace.projectName.value).toBe("旧项目");
    expect(workspace.layers.value[0].style.lineWidth).toBe(2);
    expect(workspace.layers.value[0].opacity).toBe(0.4);
    expect(workspace.activeLayer.value?.name).toBe("Legacy");
  });
});
