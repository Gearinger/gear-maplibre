<script setup lang="ts">
import { ref } from 'vue';
import {
    InboxOutlined,
} from "@ant-design/icons-vue";

const props = withDefaults(defineProps<{
    exts?: string[]
}>(),
    {
        exts: () => ['json', 'geojson', 'shp']
    }
);

const emit = defineEmits<{
    (e: 'load-file', fileName: string, reader: FileReader): void;
}>();

const fileAreaActive = ref(false);

async function dragLoadFileHandle(event) {
    let files: File[] = event.dataTransfer.files;
    // console.log(files);
    for (const file of files) {
        console.log(file);
        
        const fileName = file.name;
        const ext = fileName.split(".")[1];
        if (props.exts && !props.exts.includes(ext)) {
            alert(`Unsupported file: ${fileName}`);
            continue; // Skip files with unsupported extensions
        }
        await (async () => {
            const reader = new FileReader();
            reader.addEventListener("load", async () => {
                emit("load-file", fileName, reader)
            });
            reader.readAsText(file);
        })
    }
    fileAreaActive.value = false; // Reset the active state after handling the drop
}

async function clickLoadFileHandle(event) {

    const [fileHandle] = await window.showOpenFilePicker({
        types: props.exts.map(p => {
            return {
                rescription: p,
                accept: {
                    "*/*": ["." + p]
                }
            }
        }),
        // 可以选择多个图片
        multiple: true,
    });
    const file: File = await fileHandle.getFile();
    const fileName = file.name;
    const reader = new FileReader();
    reader.addEventListener("load", async () => {
        emit("load-file", fileName, reader)
    });
    reader.readAsText(file);
}

</script>

<template>
    <div :class="{
        'file-import-area': true,
        active: fileAreaActive,
    }" @drop.prevent="dragLoadFileHandle" @dragleave.prevent="fileAreaActive = false"
        @dragover.prevent="fileAreaActive = true" @dragenter.prevent="fileAreaActive = true"
        @click="clickLoadFileHandle" pr>
        <p class="file-import-area-icon">
            <inbox-outlined></inbox-outlined>
        </p>
        <p class="file-import-area-text">
            Click or drag file to this area to load
        </p>
        <p class="file-import-area-hint">
            Support for a single or multy files. Coordinate system
            must be 'EPSG:4326'
            <br />
            *.json ( GeoJSON ) | *.shp ( ShpFile )
        </p>
    </div>
</template>