import { defineStore } from "pinia";
import { IProducts, getProducts } from "@/api/shop";
export const useProductsStore = defineStore("products", {
  state: () => {
    return {
      // 默认是空类型，设置allProducts类型为IProducts
      allProducts: [] as IProducts[],
    };
  },
  actions: {
    async getAllProducts() {
      // res是IProducts类型的数据，不能将其赋值给allProducts,所以要将allProducts赋值赋值为一样的数据类型
      const res = await getProducts();
      this.allProducts = res;
    },
    decProducts(product: IProducts) {
      const res = this.allProducts.find((p) => p.id === product.id);
      // 如果有，则减库存
      if (res) {
        res.inventory--;
      }
    },
  },
  getters: {},
});
