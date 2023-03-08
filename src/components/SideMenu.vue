<script setup lang="ts">
import { ref } from '@vue/reactivity';

const menus = [0, 1, 2, 3, 4, 5,6,7,8];
const h_percent = 60.0 / (menus.length * 1.0)
const start_top  = 1
let top_height = ref(20);
console.log(h_percent);


function showMenu() {
    alert("!!!");
}

function m_over(i: number) {
    top_height.value = (start_top + i * h_percent)
}
</script>
<template>
    <div class="container">
        <li v-for="i in menus"
            :style="`--t: ${(start_top + i * h_percent)}%;height: ${h_percent}%;top: ${(20 + i * h_percent)}`"
            @mouseover="m_over(i)">
            <a href="#">
                <i class="fa fa-home" aria-hidden="true">1</i>
            </a>
        </li>

        <div class="top" :style="`height: ${top_height}%;`"></div>
        <div class="middle" :style="'height:' + h_percent + '%'"></div>
        <div class="bottom"></div>
    </div>
</template>
<style>
.container {
    width: 10px;
    height: 600px;
    /* 绝对固定定位 */
    position: fixed;
    left: 0px;
    /* 垂直居中 */
    top: 50%;
    transform: translateY(-50%);
    background-color: #222;
    opacity: 0.8;
    /* 右上右下圆角 */
    border-radius: 0 15px 15px 0;
    overflow: hidden;
    /* 动画过渡 */
    transition: 0.3s;
}

.container:hover {
    /* 鼠标移入，展开+改变圆角大小 */
    width: 50px;
    border-radius: 0 15px 15px 0;
}

.container:hover li a {
    /* 鼠标移入，改变字体颜色 */
    color: #fff;
}

.container::before {
    content: "";
    width: 70%;
    height: 100%;
    /* 绝对定位 */
    position: absolute;
    top: 0;
    z-index: -1;
}

.container::before {
    left: 0;
    background-color: #0aa;
}

.container .top {
    /* width: calc(100% - 30px); */
    margin-left: 5px;
    height: 20%;
    background-color: #222;
    border-radius: 0 0 0 8px;
    transition: 0.2s;
}

.container .middle {
    width: calc(100% - 10px);
    background-color: #0aa;
    margin-left: 5px;
    border-radius: 10px;
}

.container .bottom {
    /* width: calc(100% - 30px); */
    height: 100%;
    margin-left: 5px;
    background-color: #222;
    border-radius: 8px 0 0 0;
}

.container li {
    position: absolute;
    /* 通过var函数调用自定义属性--t */
    top: var(--t);
    width: 100%;
    font-size: 20px;
    /* 弹性布局 水平垂直居中 */
    display: flex;
    justify-content: center;
    align-items: center;
}

.container li a {
    /* 字体颜色透明 */
    color: transparent;
    transition: 0.3s;
}
</style>
