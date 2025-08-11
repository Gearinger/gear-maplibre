<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { Codemirror } from "vue-codemirror";
import { json } from "@codemirror/lang-json";

const content = ref('');

const model = defineModel();

function clear() {
    content.value = '';
}

watch(model, (newVal) => {
    const json = JSON.parse(newVal as string);
    content.value = JSON.stringify(json, null, 2);
});

</script>

<template>
    <div class="text-content">
        <button @click="clear">clear </button>
        <codemirror class="my-codemirror" v-model="content" @update="model = content" placeholder="Code goes here..."
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