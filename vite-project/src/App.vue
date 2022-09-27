<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from "./components/HelloWorld.vue";
import ProductsList from "@/components/productsList.vue";
import ShoppingCart from "@/components/shoppingCart.vue";
import axios from "axios";
async function f1() {
  const { data } = await axios.get("/aa/aa/aa");
  const d1 = axios.create({
    baseUrl: "https://www1111.ai0626.top",
    timeout: 5000,
  });
  const data2 = await d1.get("/getJoke");
  console.log("data2: ", data2.data);
  console.log("data: ", data);
}
f1();
</script>

<template>
  <div style="text-align: left">
    <div>
      <h1>跨域测试</h1>
    </div>
    <h1>Vue3+Pinia—购物车实例</h1>
    <hr />
    <h2>商品列表</h2>
    <ProductsList />
    <hr />
    <ShoppingCart />
  </div>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <!-- <HelloWorld /> -->
</template>

<style scoped></style>
