import type { MapMouseEvent } from "maplibre-gl";

export type MapMouseMoveHandler = (event: MapMouseEvent) => void
export type DrawEvent = { features: GeoJSON.Feature<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>[] }
export type DrawHandler = (event: DrawEvent) => void

export const MapMouseMoveHandlers: MapMouseMoveHandler[] = []
export const MapMouseClickHandlers: MapMouseMoveHandler[] = []
export const DrawHandlers: DrawHandler[] = []

function subscribe<T>(handlers: T[], handler: T) {
  handlers.push(handler)
  return () => {
    const index = handlers.indexOf(handler)
    if (index >= 0) handlers.splice(index, 1)
  }
}

export function addMouseMoveHandler(handler: MapMouseMoveHandler) {
  return subscribe(MapMouseMoveHandlers, handler)
}

export function addMouseClickHandler(handler: MapMouseMoveHandler) {
  return subscribe(MapMouseClickHandlers, handler)
}

export function addDrawHandler(handler: DrawHandler) {
  return subscribe(DrawHandlers, handler)
}
