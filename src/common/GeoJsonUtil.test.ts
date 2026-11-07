import { describe, expect, test } from "bun:test";
import {
  appendGeoJsonFeatures,
  findGeoJsonFeatureIndex,
  updateGeoJsonFeatureProperties,
} from "./GeoJsonUtil";

const pointFeature: GeoJSON.Feature<GeoJSON.Point> = {
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [120, 30],
  },
  properties: { name: "A" },
};

describe("GeoJSON utilities", () => {
  test("appends features to collections without mutating the source", () => {
    const source: GeoJSON.FeatureCollection = {
      type: "FeatureCollection",
      features: [pointFeature],
    };
    const next = appendGeoJsonFeatures(source, [
      {
        ...pointFeature,
        properties: { name: "B" },
      },
    ]);

    expect(next.features).toHaveLength(2);
    expect(source.features).toHaveLength(1);
    expect(next.features[1].properties?.name).toBe("B");
  });

  test("wraps a single geometry before appending drawn features", () => {
    const next = appendGeoJsonFeatures(pointFeature.geometry, [pointFeature]);
    expect(next.features).toHaveLength(2);
    expect(next.features[0].geometry).toEqual(pointFeature.geometry);
  });

  test("updates properties while preserving geometry and other fields", () => {
    const source: GeoJSON.FeatureCollection = {
      type: "FeatureCollection",
      features: [{ ...pointFeature, id: "a" }],
    };
    const result = updateGeoJsonFeatureProperties(source, 0, { name: "Updated" });
    if (result.data.type !== "FeatureCollection") {
      throw new Error("Expected FeatureCollection");
    }

    expect(result.data.features[0].geometry).toEqual(pointFeature.geometry);
    expect(result.data.features[0].properties?.name).toBe("Updated");
    expect(source.features[0].properties?.name).toBe("A");
  });

  test("finds features by id and generated numeric index", () => {
    const source: GeoJSON.FeatureCollection = {
      type: "FeatureCollection",
      features: [{ ...pointFeature, id: "a" }, pointFeature],
    };

    expect(findGeoJsonFeatureIndex(source, "a")).toBe(0);
    expect(findGeoJsonFeatureIndex(source, 1)).toBe(1);
    expect(findGeoJsonFeatureIndex(source, 99)).toBeUndefined();
  });
});
