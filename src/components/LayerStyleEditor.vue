<script setup lang="ts">
import { AimOutlined, EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons-vue";
import { computed } from "vue";
import {
  applyManagedLayerStyle,
  fitManagedLayer,
  setManagedLayerOpacity,
  setManagedLayerVisibility,
} from "../common/MapLayerUtil";
import { useWorkspace } from "../stores/workspace";

const { activeLayer } = useWorkspace();
const supportsGeoJsonStyle = computed(() =>
  Boolean(activeLayer.value?.data)
  && (activeLayer.value?.type === "GeoJSON" || activeLayer.value?.type === "FlatGeobuf")
);

function setColor(event: Event) {
  if (!activeLayer.value) return;
  activeLayer.value.style.color = (event.target as HTMLInputElement).value;
  applyManagedLayerStyle(activeLayer.value);
}

function setLineWidth(event: Event) {
  if (!activeLayer.value) return;
  activeLayer.value.style.lineWidth = Number((event.target as HTMLInputElement).value);
  applyManagedLayerStyle(activeLayer.value);
}

function setPointRadius(event: Event) {
  if (!activeLayer.value) return;
  activeLayer.value.style.pointRadius = Number((event.target as HTMLInputElement).value);
  applyManagedLayerStyle(activeLayer.value);
}

function setOpacity(event: Event) {
  if (!activeLayer.value) return;
  activeLayer.value.opacity = Number((event.target as HTMLInputElement).value) / 100;
  setManagedLayerOpacity(activeLayer.value, activeLayer.value.opacity);
}

function toggleVisibility() {
  if (!activeLayer.value) return;
  activeLayer.value.visible = !activeLayer.value.visible;
  setManagedLayerVisibility(activeLayer.value, activeLayer.value.visible);
}

function focusLayer() {
  if (activeLayer.value) fitManagedLayer(activeLayer.value);
}
</script>

<template>
  <div class="style-editor">
    <template v-if="activeLayer">
      <div class="style-heading">
        <div>
          <div class="style-title">{{ activeLayer.name }}</div>
          <div class="style-meta">
            {{ activeLayer.type }}
            <span v-if="activeLayer.featureCount !== undefined">
              · {{ activeLayer.featureCount }} 个要素
            </span>
          </div>
        </div>
        <div class="style-actions">
          <a-button size="small" :title="activeLayer.visible ? '隐藏图层' : '显示图层'"
            @click="toggleVisibility">
            <template #icon>
              <EyeOutlined v-if="activeLayer.visible" />
              <EyeInvisibleOutlined v-else />
            </template>
          </a-button>
          <a-button size="small" title="定位图层" :disabled="!activeLayer.bounds"
            @click="focusLayer">
            <template #icon><AimOutlined /></template>
          </a-button>
        </div>
      </div>

      <div class="style-section">
        <label class="field-label">
          <span>图层透明度</span>
          <strong>{{ Math.round(activeLayer.opacity * 100) }}%</strong>
        </label>
        <input class="range-input" type="range" min="0" max="100" step="1"
          :value="activeLayer.opacity * 100" @input="setOpacity">
      </div>

      <template v-if="supportsGeoJsonStyle">
        <div class="style-section">
          <label class="field-label">
            <span>主色</span>
            <strong>{{ activeLayer.style.color }}</strong>
          </label>
          <input class="color-input" type="color" :value="activeLayer.style.color"
            @input="setColor">
        </div>

        <div class="style-section">
          <label class="field-label">
            <span>线宽</span>
            <strong>{{ activeLayer.style.lineWidth }} px</strong>
          </label>
          <input class="range-input" type="range" min="1" max="12" step="1"
            :value="activeLayer.style.lineWidth" @input="setLineWidth">
        </div>

        <div class="style-section">
          <label class="field-label">
            <span>点半径</span>
            <strong>{{ activeLayer.style.pointRadius }} px</strong>
          </label>
          <input class="range-input" type="range" min="2" max="20" step="1"
            :value="activeLayer.style.pointRadius" @input="setPointRadius">
        </div>
      </template>

      <div class="data-summary">
        <div class="summary-row">
          <span>数据源</span>
          <code>{{ activeLayer.source }}</code>
        </div>
        <div v-if="activeLayer.bounds" class="summary-row">
          <span>范围</span>
          <code>{{ activeLayer.bounds.map(value => value.toFixed(4)).join(", ") }}</code>
        </div>
        <div v-if="activeLayer.url" class="summary-row">
          <span>URL</span>
          <code>{{ activeLayer.url }}</code>
        </div>
      </div>
    </template>

    <div v-else class="style-empty">
      选择一个图层后可调整透明度和样式。
    </div>
  </div>
</template>

<style scoped>
.style-editor {
  height: 100%;
  overflow: auto;
  padding: 4px 2px;
  color: rgba(255, 255, 255, 0.88);
}

.style-heading {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
}

.style-title {
  font-size: 15px;
  font-weight: 600;
}

.style-meta {
  margin-top: 4px;
  font-size: 11px;
  opacity: 0.55;
}

.style-actions {
  display: flex;
  gap: 4px;
}

.style-section {
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.field-label {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.62);
}

.field-label strong {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.range-input {
  width: 100%;
  accent-color: #38bdf8;
}

.color-input {
  width: 100%;
  height: 36px;
  padding: 2px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
}

.data-summary {
  margin-top: 16px;
  padding: 12px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.18);
  font-size: 11px;
}

.summary-row {
  display: grid;
  grid-template-columns: 58px minmax(0, 1fr);
  gap: 8px;
  padding: 4px 0;
}

.summary-row span {
  opacity: 0.5;
}

.summary-row code {
  overflow-wrap: anywhere;
  color: rgba(255, 255, 255, 0.75);
}

.style-empty {
  min-height: 220px;
  display: grid;
  place-content: center;
  padding: 24px;
  text-align: center;
  opacity: 0.55;
}
</style>
