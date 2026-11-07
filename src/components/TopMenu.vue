<script setup lang="ts">
import { ref } from "vue";
import {
  DownloadOutlined,
  FolderOpenOutlined,
  TableOutlined,
  CodeOutlined,
  UploadOutlined,
  UndoOutlined,
  RedoOutlined,
} from "@ant-design/icons-vue";
import { disableTileGrid, enableTileGrid } from "../common/MapTileGridUtil";
import { useWorkspace } from "../stores/workspace";

defineProps<{
  layersOpen: boolean;
  editorOpen: boolean;
  canExportGeoJson: boolean;
  canUndo: boolean;
  canRedo: boolean;
}>();

const emit = defineEmits<{
  (event: "load-sample"): void;
  (event: "toggle-layers"): void;
  (event: "toggle-editor"): void;
  (event: "export-geojson"): void;
  (event: "export-project"): void;
  (event: "import-project"): void;
  (event: "undo"): void;
  (event: "redo"): void;
}>();

const { projectName, saving } = useWorkspace();
const tileGridEnabled = ref(false);

function switchTileGrid() {
  if (tileGridEnabled.value) {
    disableTileGrid();
  } else {
    enableTileGrid();
  }
  tileGridEnabled.value = !tileGridEnabled.value;
}
</script>

<template>
  <header class="workspace-header">
    <div class="brand-block">
      <div class="brand-mark">G</div>
      <div>
        <div class="brand-title">Gear Map</div>
        <div class="brand-subtitle">GeoJSON &amp; Tile Workbench</div>
      </div>
    </div>

    <a-input v-model:value="projectName" class="project-name" maxlength="60"
      placeholder="项目名称" />

    <div class="header-actions">
      <span class="save-status">{{ saving ? "保存中..." : "已自动保存到本机" }}</span>
      <a-button title="撤销" :disabled="!canUndo" @click="emit('undo')">
        <template #icon><UndoOutlined /></template>
      </a-button>
      <a-button title="重做" :disabled="!canRedo" @click="emit('redo')">
        <template #icon><RedoOutlined /></template>
      </a-button>
      <a-button :type="layersOpen ? 'primary' : 'default'" @click="emit('toggle-layers')">
        图层
      </a-button>
      <a-button @click="emit('load-sample')">
        <template #icon><FolderOpenOutlined /></template>
        示例
      </a-button>
      <a-button :type="editorOpen ? 'primary' : 'default'" @click="emit('toggle-editor')">
        <template #icon><CodeOutlined /></template>
        JSON
      </a-button>
      <a-button @click="switchTileGrid">
        <template #icon><TableOutlined /></template>
        瓦片网格
      </a-button>
      <a-button @click="emit('import-project')">
        <template #icon><UploadOutlined /></template>
        打开项目
      </a-button>
      <a-button @click="emit('export-project')">
        <template #icon><DownloadOutlined /></template>
        项目
      </a-button>
      <a-button type="primary" :disabled="!canExportGeoJson" @click="emit('export-geojson')">
        导出 GeoJSON
      </a-button>
    </div>
  </header>
</template>

<style lang="less" scoped>
@import "../assets/main.less";

.workspace-header {
  height: 62px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 18px;
  color: @global_front_color;
  background: @global_bg_color;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 190px;
}

.brand-mark {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  font-size: 19px;
  font-weight: 700;
  color: #0f1720;
  background: linear-gradient(135deg, #5eead4, #38bdf8);
}

.brand-title {
  font-size: 16px;
  font-weight: 650;
  line-height: 1.2;
}

.brand-subtitle {
  margin-top: 2px;
  font-size: 10px;
  opacity: 0.55;
}

.project-name {
  width: 220px;
}

.header-actions {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
}

.save-status {
  margin-right: 4px;
  font-size: 11px;
  opacity: 0.55;
  white-space: nowrap;
}

@media (max-width: 1100px) {
  .brand-subtitle,
  .save-status {
    display: none;
  }

  .project-name {
    width: 160px;
  }
}

@media (max-width: 820px) {
  .workspace-header {
    height: auto;
    padding: 10px 12px;
    flex-wrap: wrap;
  }

  .header-actions {
    width: 100%;
    order: 3;
    overflow-x: auto;
  }

  .project-name {
    flex: 1;
    min-width: 120px;
  }
}
</style>
