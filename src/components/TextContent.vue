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
        <button @click="clear">clear </button>
        <codemirror class="my-codemirror" v-model="content" placeholder="Code goes here..."
            :autofocus="true" :tabSize="2" :extensions="[json()]" />
    </div>
</template>

<style>
.text-content {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 1);
    padding: 10px;
    border-radius: 5px;
}

.cm-editor {
    width: 400px;
    height: calc(100vh - 100px);
    font-family: 'Fira Code', monospace;
    font-size: 14px;
    line-height: 1.6;
}
</style>
