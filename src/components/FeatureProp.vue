<script setup lang="ts">
import { GeoJSONFeature, GeoJSONSource, Map, MapGeoJSONFeature, Source } from "maplibre-gl";
import { ref, reactive, watch } from "vue";
import { FeatureCollection, Geometry, feature } from '@turf/turf';
import { Feature } from "flatgeobuf";

interface Props {
    map: Map;
}

const props = defineProps<Props>();

interface DisplayFeature {
    type: string,
    properties: {},
    id: string,
    source: string,
    geojson: string
}

var selectFeatureList = ref<DisplayFeature[]>([]);
const activeKey = ref(0);
const descriptionVisiable = ref(false)

async function addFeatureSelectEvent() {
    props.map.on("mouseup", function (e) {
        descriptionVisiable.value = false;
        let features = props.map.queryRenderedFeatures(e.point);
        selectFeatureList.value = []
        features.forEach(feat => {
            selectFeatureList.value.push({
                type: feat['type'],
                properties: feat['properties'],
                id: feat['id']?.toString() ?? '0',
                source: feat['source'],
                geojson: JSON.stringify(feature(feat.geometry)),
            });
        })
        descriptionVisiable.value = true;

        console.log(features);
    });
}

async function propChangeHandle(e: InputEvent, prop: string, key) {
    prop = prop.toString()
    let currentFeat = selectFeatureList.value[activeKey.value];
    console.log(e);

    if (e.data) {
        currentFeat.properties[key] = prop + e.data;
    }
    if (e.inputType == "deleteContentBackward") {
        currentFeat.properties[key] = prop.substring(0, prop.length - 1);
    }
    const source = props.map.getSource(currentFeat.source) as GeoJSONSource;
    let data = source._data as FeatureCollection;
    const features: any[] = []
    for (let i = 0; i < data.features.length; i++) {
        let feature = data.features[i];
        if (i.toString() == currentFeat.id) {
            feature = {
                ...feature,
                properties: currentFeat.properties
            };
        }
        features.push(feature)
    }
    source.setData({
        ...data,
        features
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
    <div class="feature-prop" v-if="descriptionVisiable && selectFeatureList.length">



        <a-tabs size="small" v-model:activeKey="activeKey">



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



                    <a-descriptions-item v-for="prop, key of item?.properties" :key="key" :label="key">



                        <a-input :value="item.properties[key]" @change="e => propChangeHandle(e, prop, key)"></a-input>



                    </a-descriptions-item>



                    <a-descriptions-item :disable="true" class="feature-prop-textarea" label="geojson">



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
    height: 75%;
    width: 25rem;
    background-color: @global_bg_color;
    padding: @gobal_padding;

    .ant-tabs {
        width: 100%;
        white-space: normal;

        a-tab-pane {
            width: 100%;
            white-space: normal;
        }
    }

    .ant-descriptions {
        max-height: 30rem !important;
        overflow-y: scroll;
    }
}

td.ant-descriptions-item-content.feature-prop-textarea {
    padding: 0%;
}
</style>
