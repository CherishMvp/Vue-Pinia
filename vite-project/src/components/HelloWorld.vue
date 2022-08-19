<template>
  <div style="text-align: left">
    <h2>Pinia Test</h2>
    <ul>
      <li v-for="b in buttonContent">{{ b.id }}——{{ b.content }}</li>
    </ul>
    普通方式获取count:{{ mainStore.count }}
    <hr />
    使用storeToRefs获得响应式数据:{{ count }}
    <hr />
    <button @click="add">Button1</button>
    {{ count }}
    <hr />
    <button @click="addSome">Button2</button>
    参数1: {{ count }}—— 参数2: {{ foo }}
    <hr />
    <button @click="addArr">Button3</button>
    参数1: {{ count }}—— 参数2: {{ foo }}—— 参数3:{{ arr }}
    <hr />
    <button @click="changeInActions">Button4</button>
    参数1: {{ count }}—— 参数2: {{ foo }}—— 参数3:{{ arr }}
    <hr />
    <h2>{{ mainStore.count10 }}</h2>
    <!-- <h2>{{ mainStore.count11 }}</h2> -->
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from "../store";
import { storeToRefs } from "pinia";
import { ref } from "vue";
// 各类button对应的内容
const buttonContent = ref([
  {
    id: "button1",
    content: "修改state单个数据(用storeToRefs获得响应式数据)",
  },
  { id: "button2", content: "使用$patch修改state多个数据" },
  { id: "button3", content: "使用$patch函数方式直接修改state数据" },
  { id: "button4", content: "使用封装在actions中的方法修改state数据" },
]);
// 初始化实例
const mainStore = useMainStore();
console.log(mainStore);
// Pinia把state的数据做了reactive处理，解构赋值成响应式数据要借用toRefs
// 此处count被解构出来的是一个ref对象，需要使用count.value访问
const { count, foo, arr } = storeToRefs(mainStore);
// 方式一  最简单的state状态数据修改,单个数据
const add = () => {
  // console.log(count.value);
  count.value++;
};
//方式二 对state中的多个数进行修改,使用$patch(有内部优化，批量更新系)
// 比较简单的多个数据修改
const addSome = () => {
  mainStore.$patch({
    count: count.value + 9,
    foo: foo.value + 12,
  });
};
// 方式三 将$patch写成一个函数，可以对state中的数组进行修改(推荐)
// 比较复杂的多个数据修改(数组等)
// 通过指定添加参数state，写成一个函数可以直接对里面的数据进行修改
// 无需加上 .value,直接使用state.x=""修改
const addArr = () => {
  mainStore.$patch((state) => {
    state.count++;
    state.foo = "添加数组成功";
    state.arr.push(8);
  });
};
// 方式4 逻辑较多的时候可以使用封装在actions中的changeState方法(index中)
const changeInActions = () => {
  mainStore.changeState(12);
};
</script>

<style scoped>
button {
  background-color: #bfa;
}
</style>
