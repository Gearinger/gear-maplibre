import type { MapMouseEvent } from "maplibre-gl";

export type MapMouseMoveHandler = (event: MapMouseEvent) => void

export const MapMouseMoveHandlers: MapMouseMoveHandler[] = []
export const MapMouseClickHandlers: MapMouseMoveHandler[] = []

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
