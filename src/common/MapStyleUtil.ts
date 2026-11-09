import type { ExpressionSpecification } from "maplibre-gl";

const hoverColor = "#facc15";
const selectedColor = "#fb7185";

export function featureStateColor(
  baseColor: string
): ExpressionSpecification {
  return [
    "case",
    ["boolean", ["feature-state", "selected"], false],
    selectedColor,
    ["boolean", ["feature-state", "hover"], false],
    hoverColor,
    baseColor,
  ];
}

export function featureStateNumber(
  base: number,
  hover: number,
  selected: number
): ExpressionSpecification {
  return [
    "case",
    ["boolean", ["feature-state", "selected"], false],
    selected,
    ["boolean", ["feature-state", "hover"], false],
    hover,
    base,
  ];
}
