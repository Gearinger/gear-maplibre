<template>
    <Map></Map>
    <TextContent v-model="content" @update:model-value="refresh"></TextContent>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import Map from "../components/Map.vue";
import TextContent from "../components/TextContent.vue";
import { map } from "../common/MapUtil";
import * as turf from "@turf/turf";
import { message } from "ant-design-vue";
import { addDrawHandler } from "../common/MapEventUtil";
import type { GeoJSONSource, MapLayerMouseEvent } from "maplibre-gl";

const content = ref('');
const sourceId = 'geojson-source';
const layerIds = ['geojson-fill', 'geojson-line', 'geojson-point', 'geojson-label'];
let hoveredFeatureId: string | number | null = null;
let removeDrawHandler: (() => void) | undefined;
let pendingGeoJSON: GeoJSON.GeoJSON | undefined;

function parseGeoJSON(value: string) {
    const data = JSON.parse(value) as GeoJSON.GeoJSON;
    if (!data || !('type' in data)) {
        throw new Error('内容不是有效的 GeoJSON');
    }
    return data;
}

function setHoveredFeature(featureId: string | number | undefined) {
    if (hoveredFeatureId !== null) {
        map.setFeatureState({ source: sourceId, id: hoveredFeatureId }, { hover: false });
    }
    hoveredFeatureId = featureId ?? null;
    if (hoveredFeatureId !== null) {
        map.setFeatureState({ source: sourceId, id: hoveredFeatureId }, { hover: true });
    }
}

function onFeatureEnter(event: MapLayerMouseEvent) {
    map.getCanvas().style.cursor = 'pointer';
    setHoveredFeature(event.features?.[0]?.id);
}

function onFeatureLeave() {
    map.getCanvas().style.cursor = '';
    setHoveredFeature(undefined);
}

function removeGeoJSONLayers() {
    for (const layerId of layerIds) {
        if (map.getLayer(layerId)) map.removeLayer(layerId);
    }
    if (map.getSource(sourceId)) map.removeSource(sourceId);
    hoveredFeatureId = null;
}

function ensureGeoJSONLayers(data: GeoJSON.GeoJSON) {
    const source = map.getSource(sourceId) as GeoJSONSource | undefined;
    const isNewSource = !source;
    if (source) {
        source.setData(data);
    } else {
        map.addSource(sourceId, { type: 'geojson', data, generateId: true });
    }

    if (!map.getLayer('geojson-fill')) {
        map.addLayer({
            id: 'geojson-fill',
            type: 'fill',
            source: sourceId,
            filter: ['match', ['geometry-type'], ['Polygon', 'MultiPolygon'], true, false],
            paint: {
                'fill-color': [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    '#ff0000',
                    '#888888'
                ],
                'fill-opacity': 0.55,
                'fill-outline-color': '#ff0000'
            }
        });
    }

    if (!map.getLayer('geojson-line')) {
        map.addLayer({
            id: 'geojson-line',
            type: 'line',
            source: sourceId,
            filter: ['match', ['geometry-type'], ['LineString', 'MultiLineString'], true, false],
            paint: {
                'line-color': '#ff0000',
                'line-width': 2
            }
        });
    }

    if (!map.getLayer('geojson-point')) {
        map.addLayer({
            id: 'geojson-point',
            type: 'circle',
            source: sourceId,
            filter: ['match', ['geometry-type'], ['Point', 'MultiPoint'], true, false],
            paint: {
                'circle-color': '#ff0000',
                'circle-radius': 5
            }
        });
    }

    if (!map.getLayer('geojson-label')) {
        map.addLayer({
            id: 'geojson-label',
            type: 'symbol',
            source: sourceId,
            layout: {
                'text-field': ['coalesce', ['get', 'name'], ''],
                'text-size': 12,
                'text-anchor': 'center',
                'text-offset': [0, 0.5]
            },
            paint: {
                'text-color': '#ff0000'
            }
        });
    }

    const bounds = turf.bbox(data);
    if (isNewSource && bounds.every(Number.isFinite)) {
        map.fitBounds([[bounds[0], bounds[1]], [bounds[2], bounds[3]]], {
            padding: { top: 100, bottom: 100, left: 500, right: 100 }
        });
    }
}

async function refresh(value?: string) {
    try {
        if (!map) {
            alert('Map is not initialized');
            return;
        }
        const nextContent = value ?? content.value;
        if (!nextContent.trim()) {
            pendingGeoJSON = undefined;
            removeGeoJSONLayers();
            return;
        }

        const data = parseGeoJSON(nextContent);
        pendingGeoJSON = data;
        if (map.loaded()) {
            ensureGeoJSONLayers(data);
        }
    } catch (error) {
        const detail = error instanceof Error ? ` ${error.message}` : '';
        message.warning(`GeoJSON 内容无效，请检查后重试。${detail}`);
    }
}

onMounted(() => {
    removeDrawHandler = addDrawHandler((event) => {
        const feature = event.features[0];
        if (!feature) return;
        content.value = JSON.stringify(feature, null, 2);
        void refresh(content.value);
    });

    const setupInteractions = () => {
        for (const layerId of ['geojson-fill', 'geojson-line', 'geojson-point']) {
            map.on('mouseenter', layerId, onFeatureEnter);
            map.on('mouseleave', layerId, onFeatureLeave);
        }
        if (pendingGeoJSON) ensureGeoJSONLayers(pendingGeoJSON);
    };

    if (map?.loaded()) {
        setupInteractions();
    } else {
        map?.once('load', setupInteractions);
    }
});

onBeforeUnmount(() => {
    removeDrawHandler?.();
    if (!map) return;
    for (const layerId of ['geojson-fill', 'geojson-line', 'geojson-point']) {
        map.off('mouseenter', layerId, onFeatureEnter);
        map.off('mouseleave', layerId, onFeatureLeave);
    }
});
</script>
