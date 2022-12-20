<template>
    <div id="center">
        VueUse 是一个基于 Composition API 的实用函数集合。
        Info:{{ info }}
        <h2>'style module' 标签会被编译为 CSS Modules 并且将生成的 CSS 类作为 $style 对象的键暴露给组件</h2>
        <div :class="[zs.a, zs.b]">
            css module 测试
        </div>
    </div>
    <div>
        <a-butotn @click="change">切换style样式</a-butotn>
    </div>
    <h1> 测试 vueUse 的鼠标坐标 </h1>
    <h3>Mouse: {{ x }} x {{ y }}</h3>
    <useRequest />
</template>

<script setup lang="ts">
import { useMouse } from '@vueuse/core'
import request from "@/utils/axios";
import { onMounted, ref } from "vue";
import useRequest from "@/components/useRequest.vue";
const { x, y } = useMouse()
const info = ref()
const changeColor = ref({
    color: 'black'
});

const change = () =>
{

}
const requestRes = async () =>
{
    let result = await request({
        url: 'api/system/getAccountList',
        method: 'GET',
    });
    info.value = result.data.result.items[0];
    console.log(result)
}
onMounted((requestRes))
</script>

<style scoped module="zs">
#center {
    color: v-bind('changeColor.color')
}

.a {
    color: blueviolet;
    font-size: 40px;
}

.b {
    border: 1px solid black;
}
</style>