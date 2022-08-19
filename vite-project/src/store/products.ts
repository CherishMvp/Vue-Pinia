import { defineStore } from "pinia";
import { IProducts, getProducts } from "../api/shop";
export const useProductsStore = defineStore("products", {
  state: () => {
    return {
      // 设置allProducts类型为IProducts
      allProducts: [] as IProducts[],
    };
  },
  actions: {
    async getAllProducts() {
      const res = await getProducts();
      this.allProducts = res;
    },
  },
  getters: {},
});
