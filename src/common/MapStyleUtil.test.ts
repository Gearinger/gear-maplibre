import { describe, expect, test } from "bun:test";
import { featureStateColor, featureStateNumber } from "./MapStyleUtil";

describe("feature state expressions", () => {
  test("prioritizes selected, then hover, then the base color", () => {
    expect(featureStateColor("#38bdf8")).toEqual([
      "case",
      ["boolean", ["feature-state", "selected"], false],
      "#fb7185",
      ["boolean", ["feature-state", "hover"], false],
      "#facc15",
      "#38bdf8",
    ]);
  });

  test("uses state-specific numeric values", () => {
    expect(featureStateNumber(2, 3.5, 5)).toEqual([
      "case",
      ["boolean", ["feature-state", "selected"], false],
      5,
      ["boolean", ["feature-state", "hover"], false],
      3.5,
      2,
    ]);
  });
});
