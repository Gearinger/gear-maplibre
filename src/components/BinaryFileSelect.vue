<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(defineProps<{
  exts?: string[];
  label?: string;
  hint?: string;
}>(), {
  exts: () => ["fgb"],
  label: "选择或拖入 FlatGeobuf 文件",
  hint: "*.fgb · EPSG:4326",
});

const emit = defineEmits<{
  (event: "load-file", fileName: string, data: ArrayBuffer): void;
}>();

const input = ref<HTMLInputElement>();
const active = ref(false);

function extension(name: string) {
  return name.split(".").pop()?.toLowerCase() ?? "";
}

async function load(files: File[]) {
  for (const file of files) {
    if (!props.exts.includes(extension(file.name))) {
      alert(`Unsupported file: ${file.name}`);
      continue;
    }
    emit("load-file", file.name, await file.arrayBuffer());
  }
}

function openPicker() {
  input.value?.click();
}

async function onInput(event: Event) {
  const element = event.target as HTMLInputElement;
  if (element.files) await load(Array.from(element.files));
  element.value = "";
}

async function onDrop(event: DragEvent) {
  active.value = false;
  if (event.dataTransfer?.files) {
    await load(Array.from(event.dataTransfer.files));
  }
}
</script>

<template>
  <div class="file-import-area" :class="{ active }" @click="openPicker"
    @dragover.prevent="active = true" @dragenter.prevent="active = true"
    @dragleave.prevent="active = false" @drop.prevent="onDrop">
    <input ref="input" type="file" :accept="exts.map(ext => '.' + ext).join(',')" hidden
      multiple @click.stop @change="onInput">
    <p class="file-import-area-icon">▦</p>
    <p class="file-import-area-text">{{ label }}</p>
    <p class="file-import-area-hint">{{ hint }}</p>
  </div>
</template>
