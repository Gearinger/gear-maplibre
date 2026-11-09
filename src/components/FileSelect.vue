<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(defineProps<{
  exts?: string[];
}>(), {
  exts: () => ["json", "geojson", "fgb", "glb", "gltf"],
});

const emit = defineEmits<{
  (event: "load-files", files: File[]): void;
}>();

const input = ref<HTMLInputElement>();
const active = ref(false);

function extension(fileName: string) {
  return fileName.split(".").pop()?.toLowerCase() ?? "";
}

function acceptFiles(files: File[]) {
  const accepted = files.filter((file) => props.exts.includes(extension(file.name)));
  const rejected = files.filter((file) => !props.exts.includes(extension(file.name)));
  if (rejected.length > 0) {
    alert(`Unsupported file(s): ${rejected.map((file) => file.name).join(", ")}`);
  }
  if (accepted.length > 0) emit("load-files", accepted);
}

function openPicker() {
  input.value?.click();
}

function onInput(event: Event) {
  const element = event.target as HTMLInputElement;
  if (element.files) acceptFiles(Array.from(element.files));
  element.value = "";
}

function onDrop(event: DragEvent) {
  active.value = false;
  if (event.dataTransfer?.files) {
    acceptFiles(Array.from(event.dataTransfer.files));
  }
}
</script>

<template>
  <div class="file-import-area" :class="{ active }" @click="openPicker"
    @dragover.prevent="active = true" @dragenter.prevent="active = true"
    @dragleave.prevent="active = false" @drop.prevent="onDrop">
    <input ref="input" type="file" :accept="exts.map(ext => '.' + ext).join(',')" hidden
      multiple @click.stop @change="onInput">
    <p class="file-import-area-icon">＋</p>
    <p class="file-import-area-text">点击或拖入文件</p>
    <p class="file-import-area-hint">
      自动识别格式：GeoJSON、FlatGeobuf、glTF / GLB
      <br />
      {{ exts.map(ext => '*.' + ext).join(' · ') }}
    </p>
  </div>
</template>
