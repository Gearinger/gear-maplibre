<script setup lang="ts">
import { computed, ref, watch } from "vue";
import {
  CheckOutlined,
  CloseOutlined,
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  FullscreenOutlined,
  PlusOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { useWorkspace } from "../stores/workspace";
import { updateManagedGeoJson } from "../common/MapLayerUtil";
import { updateGeoJsonFeatureProperties } from "../common/GeoJsonUtil";

const emit = defineEmits<{
  (event: "focus"): void;
  (event: "edit-geometry"): void;
}>();

const { selectedFeature, layers } = useWorkspace();
const editing = ref(false);
const draftProperties = ref<Record<string, string>>({});
const newPropertyKey = ref("");
const newPropertyValue = ref("");
const propertyEntries = computed(() =>
  Object.entries(selectedFeature.value?.properties ?? {})
);
const featureJson = computed(() =>
  selectedFeature.value ? JSON.stringify(selectedFeature.value.feature, null, 2) : ""
);
const canEdit = computed(() =>
  selectedFeature.value?.featureIndex !== undefined
  && layers.value.find((layer) => layer.key === selectedFeature.value?.layerKey)?.type === "GeoJSON"
);

watch(
  selectedFeature,
  (feature) => {
    editing.value = false;
    draftProperties.value = Object.fromEntries(
      Object.entries(feature?.properties ?? {}).map(([key, value]) => [
        key,
        typeof value === "string" ? value : JSON.stringify(value),
      ])
    );
    newPropertyKey.value = "";
    newPropertyValue.value = "";
  },
  { immediate: true }
);

async function copyFeature() {
  if (!featureJson.value) return;
  await navigator.clipboard.writeText(featureJson.value);
  message.success("要素 GeoJSON 已复制");
}

function startEditing() {
  editing.value = true;
}

function cancelEditing() {
  editing.value = false;
  draftProperties.value = Object.fromEntries(
    Object.entries(selectedFeature.value?.properties ?? {}).map(([key, value]) => [
      key,
      typeof value === "string" ? value : JSON.stringify(value),
    ])
  );
}

function updateDraftValue(event: Event, key: string) {
  draftProperties.value[key] = (event.target as HTMLInputElement).value;
}

function deleteDraftProperty(key: string) {
  delete draftProperties.value[key];
}

function addDraftProperty() {
  const key = newPropertyKey.value.trim();
  if (!key) return;
  draftProperties.value[key] = newPropertyValue.value;
  newPropertyKey.value = "";
  newPropertyValue.value = "";
}

function saveProperties() {
  const selected = selectedFeature.value;
  const layer = layers.value.find((item) => item.key === selected?.layerKey);
  if (!selected || !layer?.data || selected.featureIndex === undefined) {
    message.warning("当前要素不可编辑");
    return;
  }

  try {
    const properties = { ...draftProperties.value };
    const { data: nextData, feature } = updateGeoJsonFeatureProperties(
      layer.data,
      selected.featureIndex,
      properties
    );

    layer.data = nextData;
    updateManagedGeoJson(layer, nextData);
    selected.feature = feature;
    selected.properties = properties;
    editing.value = false;
    message.success("要素属性已更新");
  } catch (error) {
    message.error(`属性更新失败：${error instanceof Error ? error.message : String(error)}`);
  }
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
          <a-button v-if="canEdit" size="small" title="编辑几何" @click="emit('edit-geometry')">
            <template #icon><EditOutlined /></template>
          </a-button>
          <a-button v-if="canEdit && !editing" size="small" title="编辑属性" @click="startEditing">
            <template #icon><EditOutlined /></template>
          </a-button>
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

      <template v-if="!editing">
        <a-descriptions class="property-list" :column="1" size="small" bordered>
          <a-descriptions-item v-for="[key, value] in propertyEntries" :key="key" :label="key">
            <span class="property-value">{{ value ?? "—" }}</span>
          </a-descriptions-item>
        </a-descriptions>

        <div v-if="propertyEntries.length === 0" class="empty-note">
          该要素没有属性字段。
        </div>
      </template>

      <div v-else class="property-editor">
        <div v-for="(value, key) in draftProperties" :key="key" class="property-edit-row">
          <code class="property-key">{{ key }}</code>
          <a-input :value="value" size="small" @input="updateDraftValue($event, key)" />
          <a-button size="small" danger type="text" title="删除属性" @click="deleteDraftProperty(key)">
            <template #icon><DeleteOutlined /></template>
          </a-button>
        </div>

        <div class="property-edit-row new-property-row">
          <a-input v-model:value="newPropertyKey" size="small" placeholder="新字段名" />
          <a-input v-model:value="newPropertyValue" size="small" placeholder="字段值" />
          <a-button size="small" title="添加属性" :disabled="!newPropertyKey.trim()"
            @click="addDraftProperty">
            <template #icon><PlusOutlined /></template>
          </a-button>
        </div>

        <div class="edit-actions">
          <a-button size="small" @click="cancelEditing">
            <template #icon><CloseOutlined /></template>
            取消
          </a-button>
          <a-button size="small" type="primary" @click="saveProperties">
            <template #icon><CheckOutlined /></template>
            保存属性
          </a-button>
        </div>
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

.property-editor {
  margin-top: 14px;
  padding: 10px;
  border: 1px solid rgba(94, 234, 212, 0.18);
  border-radius: 8px;
  background: rgba(94, 234, 212, 0.04);
}

.property-edit-row {
  display: grid;
  grid-template-columns: minmax(74px, 0.7fr) minmax(120px, 1.3fr) 28px;
  gap: 6px;
  align-items: center;
  margin-bottom: 7px;
}

.new-property-row {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed rgba(255, 255, 255, 0.1);
}

.property-key {
  overflow: hidden;
  color: rgba(255, 255, 255, 0.58);
  font-size: 11px;
  text-overflow: ellipsis;
}

.edit-actions {
  display: flex;
  justify-content: flex-end;
  gap: 6px;
  margin-top: 12px;
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
