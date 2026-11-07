<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
    exts?: string[]
}>(),
    {
        exts: () => ['json', 'geojson']
    }
);

const emit = defineEmits<{
    (e: 'load-file', fileName: string, content: string): void;
}>();

const fileAreaActive = ref(false);
const fileInput = ref<HTMLInputElement>();

function getExtension(fileName: string) {
    return fileName.split('.').pop()?.toLowerCase() ?? '';
}

async function loadFiles(files: File[]) {
    for (const file of files) {
        const fileName = file.name;
        const ext = getExtension(fileName);
        if (!props.exts.includes(ext)) {
            alert(`Unsupported file: ${fileName}`);
            continue;
        }
        try {
            emit("load-file", fileName, await file.text());
        } catch (error) {
            alert(`读取文件失败：${fileName}`);
            console.error(error);
        }
    }
}

function openFilePicker() {
    fileInput.value?.click();
}

async function inputLoadFileHandle(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) await loadFiles(Array.from(input.files));
    input.value = '';
}

async function dragLoadFileHandle(event: DragEvent) {
    fileAreaActive.value = false;
    if (event.dataTransfer?.files) {
        await loadFiles(Array.from(event.dataTransfer.files));
    }
}
</script>

<template>
    <div :class="{
        'file-import-area': true,
        active: fileAreaActive,
    }" @drop.prevent="dragLoadFileHandle" @dragleave.prevent="fileAreaActive = false"
        @dragover.prevent="fileAreaActive = true" @dragenter.prevent="fileAreaActive = true"
        @click="openFilePicker">
        <input ref="fileInput" class="file-input" type="file" :accept="props.exts.map(ext => '.' + ext).join(',')"
            multiple hidden @click.stop @change="inputLoadFileHandle">
        <p class="file-import-area-icon">
            <inbox-outlined></inbox-outlined>
        </p>
        <p class="file-import-area-text">
            Click or drag file to this area to load
        </p>
        <p class="file-import-area-hint">
            Support for one or more files. Coordinate system
            must be 'EPSG:4326'
            <br />
            *.json | *.geojson
        </p>
    </div>
</template>
