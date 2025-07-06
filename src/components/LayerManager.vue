<script setup lang="ts">
import { ref, reactive } from "vue";
import { Map } from "maplibre-gl";
import {
  GithubOutlined,
  QuestionCircleOutlined,
  DeleteOutlined,
  InboxOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { addGeoJson, addTileLayer, addPbfLayer } from "../common/MaplibreUtil";
import { ColumnProps } from "ant-design-vue/lib/table/Column";
import turf from '@turf/turf'
import FileSelect from "./FileSelect.vue";

interface Props {
  map: Map;
}
const props = defineProps<Props>();

type Key = ColumnProps["key"];

interface Layer {
  key: Key;
  id: string;
  type: string;
  source: string;
}

/**
 * 图层搜索内容
 */
let searchLayerContent = ref();
let layerList = ref<Layer[]>([]);
let selectedLayers = ref<Key[]>([]);
let importVisible = ref(false);
let fileAreaActive = ref(false);
let activeTab = ref();
const textModel = reactive({
  type: "GeoJSON",
  content: "",
});

const urlModel = reactive({
  type: "Tile",
  layerName: "layer",
  url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
});

const layerFields = [
  {
    title: "id",
    dataIndex: "id",
    width: 30,
  },
  {
    title: "type",
    dataIndex: "type",
    width: 20,
    align: "center",
  },
  {
    title: "operation",
    width: 30,
    align: "center",
    dataIndex: "operation",
    slots: { customRender: "operation" },
  },
];

async function loadFile(fileName: string, reader: FileReader) {
  let txt = reader.result as string;
  let json = JSON.parse(txt);
  addGeoJson(props.map as Map, fileName, json)
    .then((layer) => {
      addLayerToList(layer);
    })
    .catch((e: Error) => {
      message.error(e.message);
    });
}

async function deleteLayer(layer: Layer) {
  props.map.removeLayer(layer.id);
  props.map.removeSource(layer.source);
  layerList.value = layerList.value.filter((p) => p.id != layer.id);
  message.success("图层删除成功！");
}

function importfinish() {
  importVisible.value = false;
  if (activeTab.value == 2) {
    switch (urlModel.type) {
      case "Tile":
        addTileLayer(props.map, urlModel.layerName, urlModel.url)
          .then((layer) => {
            addLayerToList(layer);
            message.success("XYZ-Tile加载成功！");
          })
          .catch((e: Error) => {
            message.error(e.message);
          });
        break;
      case "GeoJSON":
        addGeoJson(props.map, urlModel.layerName, urlModel.url)
          .then((layer) => {
            addLayerToList(layer);
            message.success("GeoJSON加载成功！");
          })
          .catch((e: Error) => {
            message.error(e.message);
          });
        break;
      case "Vector Tile":
        addPbfLayer(props.map, urlModel.layerName, urlModel.url)
          .then((layer) => {
            addLayerToList(layer);
            message.success("Vector Tile加载成功！");
          })
          .catch((e: Error) => {
            message.error(e.message);
          });
        break;
      default:
        break;
    }
  }
  if (activeTab.value == 3) {
    switch (textModel.type) {
      case "GeoJSON":
        addGeoJson(props.map, Date.now().toString(), JSON.parse(textModel.content))
          .then((layer) => {
            addLayerToList(layer);
            message.success("GeoJSON加载成功！");
          })
          .catch((e: Error) => {
            message.error(e.message);
          });
        break;
    }
  }
}

function addLayerToList(layer) {
  let key = layerList.value.length;
  layerList.value.push({
    key: key,
    id: layer.id,
    type: layer.type,
    source: layer.source
  });
  selectedLayers.value.push(key);
}

function onSelectLayerChange(selectedRowKeys, selectedRows) {
  selectedLayers.value = selectedRowKeys;
}

async function onSelectLayer(record, selected, selectedRows, nativeEvent) {
  let layer = props.map.getLayer((record as Layer).id);
  layer.visibility = selected ? "visible" : "none";
  props.map.resize();
}

function githubHandle() {
  window.open("https://github.com/Gearinger");
}

function helpHandle() {
  message.warn("TODO");
}
</script>

<template>
  <div class="layer-manager">
    <div class="layer-manager-menu">
      <a-form>
        <a-row class="layer-manager-menu-top">
          <a-col :span="16">
            <div style="font-size: 18px">Gear-Map</div>
            <div style="font-size: 9px; opacity: 0.6">version 0.0.1</div>
          </a-col>
          <a-col :span="8" class="layer-manager-menu-top-btn">
            <GithubOutlined @click="githubHandle" />
            <a-tooltip placement="right" title="帮助" :mouseEnterDelay="0.3">
              <QuestionCircleOutlined @click="helpHandle" />
            </a-tooltip>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <div class="layer-manager-layer-list">
      <div class="layer-manager-layer-list-search">
        <a-row>
          <a-col :span="20">
            <a-input v-model:value="searchLayerContent" placeholder="Layer Search..."></a-input>
          </a-col>
          <a-col :span="4">
            <a-button block @click="importVisible = true">+</a-button>
            <a-modal v-model:visible="importVisible" @ok="importfinish">
              <a-tabs size="small" v-model:activeKey="activeTab">
                <a-tab-pane key="1" tab="file">
                  <FileSelect @load-file="loadFile"></FileSelect>
                </a-tab-pane>
                <a-tab-pane key="2" tab="url" force-render>
                  <a-form :model="urlModel" :label-col="{ span: 5 }" style="margin: 20px">
                    <a-form-item label="type">
                      <a-select v-model:value="urlModel.type" size="small">
                        <a-select-option value="GeoJSON">GeoJSON</a-select-option>
                        <a-select-option value="Tile">XYZ-Tile</a-select-option>
                        <a-select-option value="Vector Tile">Vector Tile</a-select-option>
                        <a-select-option value="3D Tiles">3D Tiles</a-select-option>
                        <a-select-option value="Terrain">Terrain</a-select-option>
                      </a-select>
                    </a-form-item>
                    <a-form-item label="layerName">
                      <a-input v-model:value="urlModel.layerName" size="small"></a-input>
                    </a-form-item>
                    <a-form-item label="url">
                      <a-input v-model:value="urlModel.url" size="small"></a-input>
                    </a-form-item>
                  </a-form>
                </a-tab-pane>
                <a-tab-pane key="3" tab="text" force-render>
                  <a-form :model="textModel" :label-col="{ span: 5 }" style="margin: 20px">
                    <a-form-item label="type">
                      <a-select v-model:value="textModel.type" size="small">
                        <a-select-option value="GeoJSON"></a-select-option>
                      </a-select>
                    </a-form-item>
                    <a-form-item label="content">
                      <a-textarea v-model:value="textModel.content" size="small" style="height: 200px"></a-textarea>
                    </a-form-item>
                  </a-form>
                </a-tab-pane>
              </a-tabs>
            </a-modal>
          </a-col>
        </a-row>
      </div>
      <a-table :dataSource="layerList" :columns="layerFields" size="small" tableLayout="fixed" :pagination="false"
        :row-selection="{
          columnWidth: 10,
          selectedRowKeys: selectedLayers,
          onChange: onSelectLayerChange,
          onSelect: onSelectLayer,
        }">
        <template #operation="{ record }">
          <a-button shape="circle" danger size="small" type="text" @click="deleteLayer(record)">
            <template #icon>
              <DeleteOutlined />
            </template>
          </a-button>
        </template>
      </a-table>
    </div>
  </div>
</template>

<style lang="less">
@import "../assets/main.less";

.layer-manager {
  position: absolute;
  background-color: @global_bg_color;
  width: 300px;
  height: calc(100% - 40px);
  margin: 20px;
}

.layer-manager-menu-top {
  margin-bottom: 20px;
}

.layer-manager-menu-top-btn {
  text-align: right;
  font-size: 20px;

  * {
    margin-left: 7px;
  }

  * {
    opacity: 0.8;
  }

  *:hover {
    opacity: 1;
  }
}

.layer-manager-menu {
  padding: 15px 22px;
}

.layer-manager-layer-list {
  padding: 20px;
  text-align: center;
  border-top: 1px solid rgb(80, 80, 80);
}

.layer-manager-layer-list-search {
  margin-bottom: 10px;
}

.file-import-area {
  border: 1px dashed rgba(200, 200, 200, 0.3);
  border-radius: 5px;
  height: 200px;
  text-align: center;
  padding: 10px 35px;
  opacity: 0.8;

  &.active {
    opacity: 1;
    border-color: rgb(180, 90, 60);
    color: rgb(180, 90, 60);
  }
}

.file-import-area-icon {
  font-size: 50px;
  padding: 0%;
  margin: 0%;
}

.file-import-area-text {
  font-size: 15px;
  opacity: 0.8;
}

.file-import-area-hint {
  font-size: 9px;
  opacity: 0.5;
}
</style>
