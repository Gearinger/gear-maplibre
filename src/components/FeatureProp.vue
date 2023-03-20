<script setup lang="ts">
import { Map, MapGeoJSONFeature } from "maplibre-gl";
import { ref, reactive, watch } from "vue";

interface Props {
    map: Map;
    visiable: boolean;
}
const props = defineProps<Props>();

interface DisplayFeature {
    type: string,
    properties: string,
    id: string,
    source: string
}

const activeKey = ref("1");
const currentFeature = ref<DisplayFeature>()

var selectFeatureList = ref<DisplayFeature[]>([]);

async function addFeatureSelectEvent() {
    props.map.on("mouseup", function (e) {
        let features = props.map.queryRenderedFeatures(e.point);
        selectFeatureList.value = []
        features.forEach(feat => {
            selectFeatureList.value.push(
                {
                    type: feat['type'],
                    properties: JSON.stringify(feat['properties']),
                    id: feat['id']?.toString() ?? '0',
                    source: feat['source'],
                }
            );
        })
    });
}

async function onFinish() {

}

function onFinishFailed() {

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
        <a-tabs v-model:activeKey="activeKey" size="small"
            @change="currentFeature = selectFeatureList.find(p => p.id == activeKey)">
            <a-tab-pane v-for="item, index in selectFeatureList" :key="index" :tab="item.source">
                <a-form :model="item" :label-col="{ span: 6 }" @finish="onFinish" @finishFailed="onFinishFailed">
                    <a-form-item label="id" name="id">
                        {{ item?.id }}
                    </a-form-item>
                    <a-form-item label="type" name="type">
                        {{ item?.type }}
                    </a-form-item>
                    <a-form-item label="source" name="source">
                        {{ item?.source }}
                    </a-form-item>
                    <a-form-item label="properties" name="properties">
                        <a-textarea :value="item?.properties" :rows="8" placeholder="maxlength is 6" :maxlength="6">
                        </a-textarea>

                    </a-form-item>
                </a-form>
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
    width: 18%;
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
</style>
