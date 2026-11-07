<script lang="ts" setup>
import { ref, watch } from 'vue';
import { Codemirror } from "vue-codemirror";
import { json } from "@codemirror/lang-json";

const props = withDefaults(defineProps<{ modelValue?: string }>(), {
    modelValue: '',
});
const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

const content = ref(props.modelValue);

function clear() {
    content.value = '';
}

watch(() => props.modelValue, (newValue) => {
    if (newValue === content.value) return;
    content.value = newValue;
    try {
        content.value = JSON.stringify(JSON.parse(newValue), null, 2);
    } catch {
        // 外部内容可能仍是用户正在编辑的无效 JSON。
    }
});

watch(content, (newValue) => {
    if (newValue !== props.modelValue) {
        emit('update:modelValue', newValue);
    }
});
</script>

<template>
    <div class="text-content">
        <div class="editor-toolbar">
            <span>GeoJSON</span>
            <a-button size="small" @click="clear">清空</a-button>
        </div>
        <codemirror class="my-codemirror" v-model="content" placeholder="粘贴或编辑 GeoJSON..."
            :tabSize="2" :extensions="[json()]" />
    </div>
</template>

<style scoped>
.text-content {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.editor-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.cm-editor {
    width: 100%;
    height: calc(100vh - 190px);
    font-family: 'Fira Code', monospace;
    font-size: 12px;
    line-height: 1.6;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    overflow: hidden;
}
</style>
