export const MapMouseMoveHandlers: Function[] = []
export function addMouseMoveHandler(func: Function) {
    MapMouseMoveHandlers.push(func);
}

export const MapMouseClickHandlers: Function[] = []
export function addMouseClickHandler(func: Function) {
    MapMouseClickHandlers.push(func);
}

export const DrawHandlers: Function[] = []
export function addDrawHandler(func: Function) {
    DrawHandlers.push(func);
}