<template>
  <div>
    <ul>
      <li v-for="i in ProductsStore.allProducts">
        名称:{{ i.title }}——{{ i.price }}元

        <button
          :disabled="i.inventory < 1"
          @click="cartStore.addProductToCart(i)"
        >
          添加到购物车
        </button>
        <br />
        <br />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from "@/store/products";
import { useCartStore } from "@/store/cart";

// 读取数据
const ProductsStore = useProductsStore();
// 操作actions中的get函数，初始化allProducts的值，取出使用
ProductsStore.getAllProducts();
// 添加到购物车
const cartStore = useCartStore();
// cartStore.addProductToCart();
</script>

<style scoped></style>
