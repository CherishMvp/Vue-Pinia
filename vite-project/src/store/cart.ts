import { IProducts, buyProducts } from "@/api/shop";
import { defineStore } from "pinia";
import { useProductsStore } from "@/store/products";

// 1. ‘ & ’合并类型,将CartProduct与IProducts合并，表示接口类型合并
// 使用omit过滤合并对象中不需要的类型：Omit<要合并的接口类型,'不需要的过滤对象'>
// 如 type C={} & Oimit(a,'b'):表示C类型与a类型合并，同时使用Omit过滤掉不需要的b属性
// 属性只剩下{quantity,id,price,title}
type CartProduct = {
  quantity: number;
} & Omit<IProducts, "inventory">;

// actions封装逻辑，
export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      cartProducts: [] as CartProduct[],
      isSettle: 2,
    };
  },
  getters: {
    // 计算总账单
    sum() {
      let s = 0;
      for (let i of this.cartProducts) {
        // console.log(i);
        s = s + i.price * i.quantity;
      }
      return s;
    },
  },
  actions: {
    addProductToCart(products: IProducts) {
      console.log("addProductToCart", products);
      // 1.看商品是否有库存
      if (products.inventory < 1) {
        return;
      }
      // 2.检查购物车是否有该商品
      const carItems = this.cartProducts.find((p) => p.id === products.id);
      // 3，有则让商品数量+1
      if (carItems) {
        // 如果有这个商品则新建一个变量原来存储当前商品数量
        // carItems.数量++；但是IProducts里无该类型，所以要加一个quantity表示新类型
        carItems.quantity++;
      }
      // 4.没有则添加到购物车列表
      else {
        this.cartProducts.push({
          id: products.id,
          title: products.title,
          price: products.price,
          quantity: 1,
        });
      }
      // 更新商品库存
      const productsStore = useProductsStore();
      productsStore.decProducts(products);
    },
    // 判断结算是否成功
    async check() {
      const res = await buyProducts();
      if (res) {
        this.isSettle = 1;
      } else {
        this.isSettle = 0;
      }
    },
  },
});
