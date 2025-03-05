<script setup lang="ts">
import { GeoJSONFeature, GeoJSONSource, ImageSource, Map, MapGeoJSONFeature, Source } from "maplibre-gl";
import { ref, reactive, watch } from "vue";
import { Feature, FeatureCollection, Geometry, Properties, feature } from '@turf/turf';
import { VectorTile } from '@mapbox/vector-tile';
import Pbf from "pbf";

interface Props {
    map: Map;
}

const props = defineProps<Props>();

const tileUrl = ref("");
const showModal = ref(false);

const addTileLayer = () => {
    if (tileUrl.value) {
        console.log("添加单张瓦片");

        const calculateTileBounds = (x: number, y: number, z: number): [[number, number], [number, number], [number, number], [number, number]] => {
            const tile2lon = (x: number, z: number) => (x / Math.pow(2, z) * 360 - 180);
            const tile2lat = (y: number, z: number) => {
                const n = Math.PI - 2 * Math.PI * y / Math.pow(2, z);
                return (180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n))));
            };

            const minLon = tile2lon(x, z);
            const maxLon = tile2lon(x + 1, z);
            const minLat = tile2lat(y + 1, z);
            const maxLat = tile2lat(y, z);

            return [
                [minLon, maxLat],
                [maxLon, maxLat],
                [maxLon, minLat],
                [minLon, minLat],
            ];
        };

        const urlParts = tileUrl.value.match(/\/(\d+)\/(\d+)\/(\d+)\./);
        if (!urlParts) {
            throw new Error("Invalid tile URL");
        }
        const z = parseInt(urlParts[1]);
        const x = parseInt(urlParts[2]);
        const y = parseInt(urlParts[3]);
        const bounds = calculateTileBounds(x, y, z);
        console.log(bounds);

        if (props.map.getSource('single-tile')) {
            var layerIds = props.map.getSource('single-tile')?.vectorLayerIds ?? [];
            for (const layerId of layerIds) {
                props.map.removeLayer('single-tile-layer');
            }
            props.map.removeSource('single-tile');
        }

        if (tileUrl.value.endsWith("pbf")) {
            fetch(tileUrl.value)
                .then(response => response.arrayBuffer())
                .then(data => {

                    const pbf = new Pbf(data);
                    const vectorTile = new VectorTile(pbf);
                    const layer = vectorTile.layers[Object.keys(vectorTile.layers)[0]];

                    const features: Feature[] = [];

                    for (let i = 0; i < layer.length; i++) {
                        const feature = layer.feature(i);
                        const geojsonFeature = feature.toGeoJSON(x, y, z) as GeoJSONFeature;

                        features.push(geojsonFeature);
                    }

                    const pointFeatures = features.filter(f => f.geometry.type === 'Point');
                    const lineFeatures = features.filter(f => f.geometry.type === 'LineString');
                    const polygonFeatures = features.filter(f => f.geometry.type === 'Polygon');

                    if (pointFeatures.length > 0) {
                        props.map.addSource('single-tile-points', {
                            type: 'geojson',
                            data: {
                                type: 'FeatureCollection',
                                features: pointFeatures
                            }
                        });

                        props.map.addLayer({
                            id: 'single-tile-points-layer',
                            type: 'circle',
                            source: 'single-tile-points',
                            paint: {
                                'circle-radius': 5,
                                'circle-color': '#FF0000'
                            }
                        });
                    }

                    if (lineFeatures.length > 0) {
                        props.map.addSource('single-tile-lines', {
                            type: 'geojson',
                            data: {
                                type: 'FeatureCollection',
                                features: lineFeatures
                            }
                        });

                        props.map.addLayer({
                            id: 'single-tile-lines-layer',
                            type: 'line',
                            source: 'single-tile-lines',
                            paint: {
                                'line-width': 2,
                                'line-color': '#0000FF'
                            }
                        });
                    }

                    if (polygonFeatures.length > 0) {
                        props.map.addSource('single-tile-polygons', {
                            type: 'geojson',
                            data: {
                                type: 'FeatureCollection',
                                features: polygonFeatures
                            }
                        });

                        props.map.addLayer({
                            id: 'single-tile-polygons-layer',
                            type: 'fill',
                            source: 'single-tile-polygons',
                            paint: {
                                'fill-color': '#00FF00',
                                'fill-opacity': 0.5
                            }
                        });
                    }

                })
                .catch(error => {
                    console.error("Error fetching or parsing PBF data:", error);
                });
        } else {
            props.map.addSource('single-tile', {
                type: 'image',
                url: tileUrl.value,
                coordinates: bounds,

            });

            props.map.addLayer({
                id: 'single-tile-layer',
                type: 'raster',
                source: 'single-tile',
                paint: {
                    'raster-opacity': 0.85
                }
            });
        }

    }
};

const openModal = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};

const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
        addTileLayer();
        closeModal();
    }
};

</script>

<template>
    <div class="single-tile-load" style="z-index: 999;">
        <button @click="openModal">加载单张瓦片</button>

        <div v-if="showModal" class="modal">
            <div class="modal-content">
                <span @click="closeModal" class="close">&times;</span>
                <input style="width: 30rem;" v-model="tileUrl" @keypress="handleKeyPress" placeholder="瓦片url格式需满足/z/x/y.{format}" />
            </div>
        </div>
    </div>
</template>

<style lang="less">
@import "../assets/main.less";

.single-tile-load {
    z-index: 999;
    position: absolute;
    left: 350px;
    top: 20px;
    text-shadow: 1px 1px 5px black;
    background-color: @global_bg_color;
    border-radius: 0.5rem;
    display: flex;

    * {
        border: transparent;
        background-color: @global_bg_color;
        color: @global_front_color;
        border-radius: 0.5rem;
        margin: 0.5rem;
    }
}
</style>
