import { describe, expect, test } from "bun:test";
import { geojson } from "flatgeobuf";

describe("FlatGeobuf parsing", () => {
  test("round-trips point and polygon features", async () => {
    const source: GeoJSON.FeatureCollection = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: { name: "point" },
          geometry: {
            type: "Point",
            coordinates: [120, 30],
          },
        },
        {
          type: "Feature",
          properties: { name: "polygon" },
          geometry: {
            type: "Polygon",
            coordinates: [[
              [120, 30],
              [121, 30],
              [121, 31],
              [120, 30],
            ]],
          },
        },
      ],
    };

    const bytes = geojson.serialize(source);
    const features: GeoJSON.Feature[] = [];
    for await (const feature of geojson.deserialize(bytes)) {
      features.push(feature);
    }

    expect(features).toHaveLength(2);
    expect(features[0].geometry.type).toBe("Point");
    expect(features[1].geometry.type).toBe("Polygon");
  });
});
