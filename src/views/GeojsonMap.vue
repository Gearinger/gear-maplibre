<template>
    <Map></Map>
    <TextContent v-model="content" @update:model-value="refresh"></TextContent>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Map from "../components/Map.vue";
import TextContent from "../components/TextContent.vue";
import { map } from "../common/MapUtil";
import * as turf from "@turf/turf";
import { message } from "ant-design-vue";
import { addDrawHandler, addMouseMoveHandler } from "../common/MapEventUtil";

const content = ref('');

addDrawHandler(e => {
    console.log('e', e);
    content.value = JSON.stringify(e.features[0], null, 2);
});

async function refresh() {
    try {
        if (!map) {
            alert('Map is not initialized');
            return;
        }
        if (!map.getSource('geojson-source')) {
            map.addSource('geojson-source', {
                type: 'geojson',
                data: JSON.parse(content.value),
                generateId: true
            });
        } else {
            (map.getSource('geojson-source') as maplibregl.GeoJSONSource).setData(JSON.parse(content.value));
        }
        if (map.getLayer('geojson-layer')) {
            map.removeLayer('geojson-layer');
        }
        const layer = map.addLayer({
            id: 'geojson-layer',
            type: 'fill',
            source: 'geojson-source',
            paint: {
                'fill-color': [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    '#ff0000', // 高亮颜色
                    '#888888'  // 默认颜色
                ],
                'fill-opacity': [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    0.8, // 高亮透明度
                    0.5  // 默认透明度
                ]

            }
        });
        // 鼠标悬浮在要素上时，要素高亮
        let hoveredFeatureId: any = null;
        map.on('mouseover', 'geojson-layer', (e) => {
            if (e.features && e.features.length > 0) {
                map.getCanvas().style.cursor = 'pointer';
            } else {
                map.getCanvas().style.cursor = '';
            }
        });
        map.on("click", 'geojson-layer', e => {
            // 如果之前有高亮的要素，先取消高亮
            if (hoveredFeatureId !== null) {
                map.setFeatureState(
                    { source: 'geojson-source', id: hoveredFeatureId },
                    { hover: false }
                );
            }
            if (e.features && e.features.length > 0) {
                map.getCanvas().style.cursor = 'pointer';
                // 高亮当前要素
                hoveredFeatureId = e.features[0].id;
                map.setFeatureState(
                    { source: 'geojson-source', id: hoveredFeatureId },
                    { hover: true }
                );
            } else {
                map.getCanvas().style.cursor = '';
            }
        })
        const bounds = turf.bbox((map.getSource('geojson-source') as maplibregl.GeoJSONSource)._data);
        map.fitBounds([[bounds[0], bounds[1]], [bounds[2], bounds[3]]], {
            padding: { top: 100, bottom: 100, left: 500, right: 100 }
        });
    } catch (error) {
        if (map && map.getLayer('geojson-layer')) {
            map.removeLayer('geojson-layer');
        }
        if (map && map.getSource('geojson-source')) {
            map.removeSource('geojson-source');
        }
        message.warning('Failed to refresh map. Please check the GeoJSON content.');
    }


}

</script>