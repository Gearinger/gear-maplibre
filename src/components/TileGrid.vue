<script setup lang="ts">
import { GeoJSONFeature, GeoJSONSource, Map, MapGeoJSONFeature, Source } from "maplibre-gl";
import { ref, reactive, watch } from "vue";
import { FeatureCollection, Geometry, feature } from '@turf/turf';
import { Feature } from "flatgeobuf";

interface Props {
    map: Map;
}

const props = defineProps<Props>();


const once = ref(true);
watch(
    () => props.map,
    (newValue, oldValue) => {
        if (once.value) {

            props.map.on("zoom", async () => {
                // 计算窗口范围内的瓦片坐标，并显示出每个瓦片的范围
                const bounds = props.map.getBounds();
                const zoom = Math.floor(props.map.getZoom() + 1);
                console.log(zoom);

                const tiles: { x: number; y: number; zoom: number }[] = [];
                const lngToTile = (lng: number, zoom: number) => Math.floor((lng + 180) / 360 * Math.pow(2, zoom));
                const latToTile = (lat: number, zoom: number) => Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom));
                const minX = lngToTile(bounds.getWest(), zoom);
                const maxX = lngToTile(bounds.getEast(), zoom);
                const minY = latToTile(bounds.getNorth(), zoom);
                const maxY = latToTile(bounds.getSouth(), zoom);
                for (let x = minX; x <= maxX; x++) {
                    for (let y = minY; y <= maxY; y++) {
                        tiles.push({ x, y, zoom });
                    }
                }
                const features = tiles.map(tile => {
                    const { x, y, zoom } = tile;
                    const n = Math.pow(2, zoom);
                    const lon1 = x / n * 360.0 - 180.0;
                    const lat1 = Math.atan(Math.sinh(Math.PI * (1 - 2 * y / n))) * 180.0 / Math.PI;
                    const lon2 = (x + 1) / n * 360.0 - 180.0;
                    const lat2 = Math.atan(Math.sinh(Math.PI * (1 - 2 * (y + 1) / n))) * 180.0 / Math.PI;
                    return {
                        type: "Feature",
                        geometry: {
                            type: "Polygon",
                            coordinates: [[
                                [lon1, lat1],
                                [lon2, lat1],
                                [lon2, lat2],
                                [lon1, lat2],
                                [lon1, lat1]
                            ]]
                        },
                        properties: {
                            x,
                            y,
                            zoom
                        }
                    };
                });

                const geojson = {
                    type: "FeatureCollection",
                    features
                };

                if (props.map.getSource('tile-grid')) {
                    (props.map.getSource('tile-grid') as GeoJSONSource).setData(geojson);
                } else {
                    props.map.addSource('tile-grid', { type: 'geojson', data: geojson });

                    props.map.addLayer({
                        id: 'tile-grid',
                        type: 'line',
                        source: 'tile-grid',
                        paint: {
                            'line-color': '#888',
                            'line-width': 2
                        }
                    });

                    props.map.addLayer({
                        id: 'tile-grid-labels',
                        type: 'symbol',
                        source: 'tile-grid',
                        layout: {
                            'text-field': ['concat', 'X: ', ['get', 'x'], '\nY: ', ['get', 'y'], '\nZoom: ', ['get', 'zoom']],
                            'text-size': 12,
                            'text-offset': [0, 0.5],
                            'text-anchor': 'top'
                        },
                        paint: {
                            'text-color': '#000'
                        }
                    });
                }
            });

            once.value = false;
        }
    }
);
</script>

<template>
</template>

<style lang="less"></style>
