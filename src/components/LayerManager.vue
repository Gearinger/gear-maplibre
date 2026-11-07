<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import {
  GithubOutlined,
  QuestionCircleOutlined,
  DeleteOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  AimOutlined,
  PlusOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { map } from "../common/MapUtil";
import FileSelect from "./FileSelect.vue";
import {
  addGeoJson,
  addPbfLayer,
  addTileLayer,
  fitManagedLayer,
  removeManagedLayer,
  setManagedLayerOpacity,
  setManagedLayerVisibility,
} from "../common/MapLayerUtil";
import { useWorkspace } from "../stores/workspace";
import type { WorkspaceLayer } from "../types/workspace";

const workspace = useWorkspace();
const {
  layers,
  activeLayerKey,
  selectedFeature,
  projectName,
} = workspace;

/**
 * 图层搜索内容
 */
const searchLayerContent = ref("");
const importVisible = ref(false);
const activeTab = ref("1");
const editingKey = ref("");
const editingName = ref("");

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
  if (!query) return layers.value;
  return layers.value.filter((layer) =>
    [layer.name, layer.id, layer.type, layer.source].some((value) =>
      value?.toLowerCase().includes(query)
    )
  );
});

const layerFields = [
  {
    title: "图层",
    dataIndex: "name",
    width: 130,
    slots: { customRender: "name" },
  },
  {
    title: "类型",
    dataIndex: "type",
    width: 75,
    align: "center",
  },
  {
    title: "要素",
    dataIndex: "featureCount",
    width: 50,
    align: "center",
  },
  {
    title: "透明度",
    dataIndex: "opacity",
    width: 85,
    align: "center",
    slots: { customRender: "opacity" },
  },
  {
    title: "操作",
    width: 65,
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
    workspace.addLayer(await addGeoJson(sourceName, json), fileName.replace(/\.[^.]+$/, ""));
    importVisible.value = false;
    message.success(`${fileName} 加载成功`);
  } catch (error) {
    message.error(`文件解析或加载失败：${getErrorMessage(error)}`);
  }
}

async function deleteLayer(layer: WorkspaceLayer) {
  try {
    removeManagedLayer(layer);
    workspace.removeLayer(layer.key);
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
    workspace.addLayer(await addPbfLayer(uniqueName, tileUrl), layerName);
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
        workspace.addLayer(layer, urlModel.layerName || layer.id);
      }
    } else if (activeTab.value === "3") {
      const json = JSON.parse(textModel.content) as GeoJSON.GeoJSON;
      const layerName = getUniqueLayerName(`geojson-${Date.now()}`);
      workspace.addLayer(await addGeoJson(layerName, json), "粘贴的 GeoJSON");
    }

    importVisible.value = false;
    message.success("图层导入成功！");
  } catch (error) {
    message.error(`图层导入失败：${getErrorMessage(error)}`);
  }
}

async function loadSample() {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}data/smallGeoJSON.geojson`);
    if (!response.ok) throw new Error(`请求失败：${response.status}`);
    const data = await response.json() as GeoJSON.GeoJSON;
    workspace.addLayer(
      await addGeoJson(getUniqueLayerName("示例数据"), data),
      "示例数据"
    );
    message.success("示例数据加载成功");
  } catch (error) {
    message.error(`示例数据加载失败：${getErrorMessage(error)}`);
  }
}

function setActiveLayer(layer: WorkspaceLayer) {
  activeLayerKey.value = layer.key;
  selectedFeature.value = undefined;
}

function rowProps(layer: WorkspaceLayer) {
  return {
    onClick: () => setActiveLayer(layer),
    class: layer.key === activeLayerKey.value ? "active-layer-row" : "",
  };
}

function toggleVisibility(layer: WorkspaceLayer) {
  layer.visible = !layer.visible;
  setManagedLayerVisibility(layer, layer.visible);
}

function changeOpacity(event: Event, layer: WorkspaceLayer) {
  const value = Number((event.target as HTMLInputElement).value) / 100;
  layer.opacity = value;
  setManagedLayerOpacity(layer, value);
}

function focusLayer(layer: WorkspaceLayer) {
  setActiveLayer(layer);
  if (!fitManagedLayer(layer)) {
    message.info("该图层没有可用的范围信息");
  }
}

function startRename(layer: WorkspaceLayer) {
  editingKey.value = layer.key;
  editingName.value = layer.name;
}

function commitRename(layer: WorkspaceLayer) {
  const name = editingName.value.trim();
  if (name) layer.name = name;
  editingKey.value = "";
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
            <div style="font-size: 15px">图层资源</div>
            <div style="font-size: 10px; opacity: 0.6">{{ projectName }}</div>
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
          <a-col :span="12">
            <a-input v-model:value="searchLayerContent" placeholder="Layer Search..."></a-input>
          </a-col>
          <a-col :span="6">
            <a-button block title="加载示例数据" @click="loadSample">示例</a-button>
          </a-col>
          <a-col :span="6">
            <a-button block type="primary" title="导入图层" @click="importVisible = true">
              <template #icon><PlusOutlined /></template>
            </a-button>
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
      <a-table :dataSource="filteredLayerList" :columns="layerFields" size="small" tableLayout="fixed"
        :pagination="false" :customRow="rowProps" :scroll="{ x: 380 }">
        <template #name="{ record }">
          <div class="layer-name-cell" @dblclick.stop="startRename(record)">
            <button class="visibility-button" :title="record.visible ? '隐藏图层' : '显示图层'"
              @click.stop="toggleVisibility(record)">
              <EyeOutlined v-if="record.visible" />
              <EyeInvisibleOutlined v-else />
            </button>
            <a-input v-if="editingKey === record.key" v-model:value="editingName" size="small"
              @click.stop @blur="commitRename(record)" @pressEnter="commitRename(record)" />
            <span v-else class="layer-name">{{ record.name }}</span>
          </div>
        </template>
        <template #opacity="{ record }">
          <input class="opacity-input" type="range" min="0" max="100" :value="record.opacity * 100"
            @click.stop @input="changeOpacity($event, record)">
        </template>
        <template #operation="{ record }">
          <a-button title="定位图层" size="small" type="text" @click.stop="focusLayer(record)">
            <template #icon><AimOutlined /></template>
          </a-button>
          <a-button shape="circle" danger size="small" type="text" @click.stop="deleteLayer(record)">
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
  position: relative;
  background-color: @global_bg_color;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  flex: none;
  padding: 14px 16px;
}

.layer-manager-layer-list {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 12px;
  text-align: center;
  border-top: 1px solid rgb(80, 80, 80);
}

.layer-manager-layer-list-search {
  position: sticky;
  top: 0;
  z-index: 2;
  margin-bottom: 10px;
  padding-bottom: 6px;
  background: @global_bg_color;
}

.layer-name-cell {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
}

.layer-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.visibility-button {
  flex: none;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 0;
  color: inherit;
  background: transparent;
  cursor: pointer;
}

.opacity-input {
  width: 64px;
  cursor: pointer;
  accent-color: #38bdf8;
}

.active-layer-row > td {
  background: rgba(56, 189, 248, 0.12) !important;
}

.ant-table-row {
  cursor: pointer;
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
