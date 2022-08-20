<template>
  <div>
    <p>name from state:{{ firstStore.name }}</p>
    <p>use storeToRefs:{{ name }}——{{ age }}</p>
    {{ count }}
    <h2>Button</h2>
    <button type="primary" @click="a1">普通方式修改name</button><br />
    <button type="primary" @click="a2">实例的对象形式修改多个state参数</button
    ><br />
    <button type="primary" @click="a3">实例的函数形式修改多个state参数</button>
  </div>
</template>

<script setup lang="ts">
import { useFirstStore } from "../store/index";
import { storeToRefs } from "pinia";

const firstStore = useFirstStore();
// 解构赋值，直接将读取到的变量变成响应式数据
const { name, age, count } = storeToRefs(firstStore);
console.log("收到：", firstStore);

// 修改state数据的几种办法
// 1.
const a1 = () => {
  name.value = "cherish";
};
// 2.通过简单的对象的形式
const a2 = () => {
  firstStore.$patch({
    name: "zgl",
    age: 20,
  });
};

// 3.通过函数的形式，通过实例对象的$patch来修改state的属性
const a3 = () => {
  firstStore.changeMethod3();
};
</script>

<style scoped>
p {
  color: #b3a;
}
</style>
