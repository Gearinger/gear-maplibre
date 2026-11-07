<script setup lang="ts">
import { computed } from "vue";
import { CloseOutlined, CopyOutlined, FullscreenOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { useWorkspace } from "../stores/workspace";

const emit = defineEmits<{
  (event: "focus"): void;
}>();

const { selectedFeature } = useWorkspace();
const propertyEntries = computed(() =>
  Object.entries(selectedFeature.value?.properties ?? {})
);
const featureJson = computed(() =>
  selectedFeature.value ? JSON.stringify(selectedFeature.value.feature, null, 2) : ""
);

async function copyFeature() {
  if (!featureJson.value) return;
  await navigator.clipboard.writeText(featureJson.value);
  message.success("要素 GeoJSON 已复制");
}
</script>

<template>
  <div class="feature-inspector">
    <template v-if="selectedFeature">
      <div class="inspector-heading">
        <div>
          <div class="inspector-title">{{ selectedFeature.layerName }}</div>
          <div class="inspector-subtitle">
            {{ selectedFeature.geometryType }}
            <span v-if="selectedFeature.id !== undefined">· ID {{ selectedFeature.id }}</span>
          </div>
        </div>
        <div class="inspector-actions">
          <a-button size="small" title="定位要素" @click="emit('focus')">
            <template #icon><FullscreenOutlined /></template>
          </a-button>
          <a-button size="small" title="复制 GeoJSON" @click="copyFeature">
            <template #icon><CopyOutlined /></template>
          </a-button>
          <a-button size="small" title="清空选择" @click="selectedFeature = undefined">
            <template #icon><CloseOutlined /></template>
          </a-button>
        </div>
      </div>

      <a-descriptions class="property-list" :column="1" size="small" bordered>
        <a-descriptions-item v-for="[key, value] in propertyEntries" :key="key" :label="key">
          <span class="property-value">{{ value ?? "—" }}</span>
        </a-descriptions-item>
      </a-descriptions>

      <div v-if="propertyEntries.length === 0" class="empty-note">
        该要素没有属性字段。
      </div>

      <details class="raw-json">
        <summary>查看要素 GeoJSON</summary>
        <pre>{{ featureJson }}</pre>
      </details>
    </template>

    <div v-else class="empty-inspector">
      <div class="empty-inspector-title">选择一个要素</div>
      <p>在地图上点击已加载的图层，这里会显示要素属性和几何信息。</p>
    </div>
  </div>
</template>

<style scoped>
.feature-inspector {
  height: 100%;
  overflow: auto;
  color: rgba(255, 255, 255, 0.88);
}

.inspector-heading {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
}

.inspector-title {
  font-size: 15px;
  font-weight: 600;
}

.inspector-subtitle {
  margin-top: 4px;
  font-size: 11px;
  opacity: 0.55;
}

.inspector-actions {
  display: flex;
  gap: 4px;
}

.property-list {
  margin-top: 14px;
}

.property-value {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.empty-note {
  margin-top: 14px;
  font-size: 12px;
  opacity: 0.5;
}

.raw-json {
  margin-top: 16px;
  font-size: 12px;
}

.raw-json summary {
  cursor: pointer;
  opacity: 0.7;
}

.raw-json pre {
  max-height: 260px;
  overflow: auto;
  padding: 10px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.25);
  font-size: 11px;
}

.empty-inspector {
  min-height: 220px;
  display: grid;
  place-content: center;
  text-align: center;
  padding: 24px;
  opacity: 0.55;
}

.empty-inspector-title {
  margin-bottom: 8px;
  font-size: 15px;
  font-weight: 600;
}

.empty-inspector p {
  max-width: 260px;
  margin: 0;
  line-height: 1.6;
}
</style>
