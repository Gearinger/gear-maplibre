<script setup lang="ts">
import { Map, MapGeoJSONFeature } from "maplibre-gl";
import { ref, reactive, watch } from "vue";
import { feature } from '@turf/turf';

interface Props {
    map: Map;
    visiable: boolean;
}
const props = defineProps<Props>();

interface DisplayFeature {
    type: string,
    properties: string,
    id: string,
    source: string,
    geojson: string
}

const currentFeature = ref<DisplayFeature>()

var selectFeatureList = ref<DisplayFeature[]>([]);

async function addFeatureSelectEvent() {
    props.map.on("mouseup", function (e) {
        let features = props.map.queryRenderedFeatures(e.point);
        selectFeatureList.value = []
        features.forEach(feat => {
            console.log(feat.toJSON());

            selectFeatureList.value.push(
                {
                    type: feat['type'],
                    properties: JSON.stringify(feat['properties']),
                    id: feat['id']?.toString() ?? '0',
                    source: feat['source'],
                    geojson: JSON.stringify(feature(feat.geometry)),
                }
            );
        })
    });
}

const once = ref(true);
watch(
    () => props.map,
    (oldValue, newValue) => {
        if (once.value) {
            addFeatureSelectEvent();
            once.value = false;
        }
    }
);
</script>

<template>
    <div class="feature-prop" v-if="visiable && selectFeatureList.length">
        <a-tabs size="small">
            <a-tab-pane v-for="item, index in selectFeatureList" :key="index" :tab="item.source">
                <a-descriptions :column="1" size="small" bordered>
                    <a-descriptions-item label="id">
                        {{ item?.id }}
                    </a-descriptions-item>
                    <a-descriptions-item label="type">
                        {{ item?.type }}
                    </a-descriptions-item>
                    <a-descriptions-item label="source">
                        {{ item?.source }}
                    </a-descriptions-item>
                    <a-descriptions-item class="feature-prop-textarea" label="properties">
                        <a-textarea :value="item?.properties" :rows="8" placeholder="maxlength is 6" :maxlength="6">
                        </a-textarea>
                    </a-descriptions-item>
                    <a-descriptions-item class="feature-prop-textarea" label="geojson">
                        <a-textarea :value="item?.geojson" :rows="8" placeholder="maxlength is 6" :maxlength="6">
                        </a-textarea>
                    </a-descriptions-item>
                </a-descriptions>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<style lang="less">
@import "../assets/main.less";

.feature-prop {
    position: absolute;
    bottom: 15%;
    right: 55px;
    height: 70%;
    width: 23%;
    background-color: @global_bg_color;
    padding: @gobal_padding;

    a-tabs {
        width: 100%;
        white-space: normal;

        a-tab-pane {
            width: 100%;
            white-space: normal;
        }
    }
}

td.ant-descriptions-item-content.feature-prop-textarea{
    padding: 0%;
}
</style>
