<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import {
  GithubOutlined,
  QuestionCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { map } from "../common/MapUtil";
import FileSelect from "./FileSelect.vue";
import {
  addGeoJson,
  addPbfLayer,
  addTileLayer,
  type ManagedLayer,
} from "../common/MapLayerUtil";

type Key = string | number;

interface Layer {
  key: Key;
  id: string;
  type: string;
  source: string;
}

/**
 * 图层搜索内容
 */
const searchLayerContent = ref("");
const layerList = ref<Layer[]>([]);
const selectedLayers = ref<Key[]>([]);
const importVisible = ref(false);
const activeTab = ref("1");
let nextLayerKey = 0;

const textModel = reactive({
  type: "GeoJSON",
  content: "",
});

const urlModel = reactive({
  type: "Tile",
  layerName: "layer",
  url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
});

const filteredLayerList = computed(() => {
  const query = searchLayerContent.value.trim().toLowerCase();
  if (!query) return layerList.value;
  return layerList.value.filter((layer) =>
    [layer.id, layer.type, layer.source].some((value) =>
      value.toLowerCase().includes(query)
    )
  );
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

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}

function getUniqueLayerName(baseName: string) {
  const normalized = baseName.trim() || "layer";
  let candidate = normalized;
  let suffix = 1;
  while (
    map.getSource(candidate) ||
    (map.getStyle().layers ?? []).some((layer) => layer.id === candidate)
  ) {
    candidate = `${normalized}-${suffix++}`;
  }
  return candidate;
}

async function loadFile(fileName: string, content: string) {
  try {
    const json = JSON.parse(content) as GeoJSON.GeoJSON;
    const sourceName = getUniqueLayerName(fileName.replace(/\.[^.]+$/, ""));
    addLayerToList(await addGeoJson(sourceName, json));
    importVisible.value = false;
    message.success(`${fileName} 加载成功`);
  } catch (error) {
    message.error(`文件解析或加载失败：${getErrorMessage(error)}`);
  }
}

function getLayerStyleIds(layer: Layer) {
  return (map.getStyle().layers ?? [])
    .filter((styleLayer) => "source" in styleLayer && styleLayer.source === layer.source)
    .map((styleLayer) => styleLayer.id);
}

async function deleteLayer(layer: Layer) {
  try {
    for (const layerId of getLayerStyleIds(layer)) {
      if (map.getLayer(layerId)) map.removeLayer(layerId);
    }
    if (map.getSource(layer.source)) map.removeSource(layer.source);

    layerList.value = layerList.value.filter((item) => item.key !== layer.key);
    selectedLayers.value = selectedLayers.value.filter((key) => key !== layer.key);
    message.success("图层删除成功！");
  } catch (error) {
    message.error(`图层删除失败：${getErrorMessage(error)}`);
  }
}

async function importMartinCatalog(catalogUrl: string) {
  const response = await fetch(catalogUrl);
  if (!response.ok) throw new Error(`Martin Catalog 请求失败：${response.status}`);

  const catalog = await response.json() as {
    tiles?: Record<string, { content_type?: string }>;
  };
  const layerMap = catalog.tiles ?? {};
  let loaded = 0;

  for (const layerName of Object.keys(layerMap)) {
    if (layerMap[layerName].content_type !== "application/x-protobuf") continue;
    const uniqueName = getUniqueLayerName(layerName);
    const tileUrl = catalogUrl.replace(/catalog\/?$/, uniqueName);
    addLayerToList(await addPbfLayer(uniqueName, tileUrl));
    loaded++;
  }

  if (loaded === 0) throw new Error("Martin Catalog 中没有可用的 PBF 图层");
}

async function importfinish() {
  if (activeTab.value === "1") {
    importVisible.value = false;
    return;
  }

  try {
    if (activeTab.value === "2") {
      if (urlModel.type === "Martin Catalog") {
        await importMartinCatalog(urlModel.url);
      } else {
        const layerName = getUniqueLayerName(urlModel.layerName);
        const layer = urlModel.type === "Tile"
          ? await addTileLayer(layerName, urlModel.url)
          : urlModel.type === "Vector Tile"
            ? await addPbfLayer(layerName, urlModel.url)
            : urlModel.type === "GeoJSON"
              ? await addGeoJson(layerName, urlModel.url)
              : undefined;

        if (!layer) {
          throw new Error(`暂不支持图层类型：${urlModel.type}`);
        }
        addLayerToList(layer);
      }
    } else if (activeTab.value === "3") {
      const json = JSON.parse(textModel.content) as GeoJSON.GeoJSON;
      const layerName = getUniqueLayerName(`geojson-${Date.now()}`);
      addLayerToList(await addGeoJson(layerName, json));
    }

    importVisible.value = false;
    message.success("图层导入成功！");
  } catch (error) {
    message.error(`图层导入失败：${getErrorMessage(error)}`);
  }
}

function addLayerToList(layer: ManagedLayer) {
  const key = nextLayerKey++;
  layerList.value.push({
    key: key,
    id: layer.id,
    type: layer.type,
    source: layer.source
  });
  selectedLayers.value.push(key);
}

function onSelectLayerChange(selectedRowKeys: Key[]) {
  selectedLayers.value = selectedRowKeys;
}

function onSelectLayer(record: Layer, selected: boolean) {
  for (const layerId of getLayerStyleIds(record)) {
    map.setLayoutProperty(layerId, "visibility", selected ? "visible" : "none");
  }
}

function githubHandle() {
  window.open("https://github.com/Gearinger");
}

function helpHandle() {
  message.info("支持 GeoJSON、XYZ 瓦片、矢量瓦片和 Martin Catalog。");
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
            <a-modal v-model:open="importVisible" @ok="importfinish">
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
                        <a-select-option value="Martin Catalog">Martin Catalog</a-select-option>
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
      <a-table :dataSource="filteredLayerList" :columns="layerFields" size="small" tableLayout="fixed" :pagination="false"
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
