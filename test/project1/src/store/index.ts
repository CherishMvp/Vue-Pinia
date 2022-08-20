import { defineStore } from "pinia";

export const useFirstStore = defineStore("first", {
  // actions逻辑处理，可以同步也可以异步函数，same as methods
  actions: {
    // 将方式3移到acyions中处理
    changeState(age: number) {
      this.$patch((state: any) => {
        state.age += age;
        state.name = "张三";
      });
    },
    changeMethod3(): any {
      this.$patch((state) => {
        state.name = "333";
        state.age = 29;
      });
    },
  },
  // same as computed 计算属性
  getters: {
    count: (state) => {
      return ++state.age;
    },
  },
  state: () => {
    return {
      name: "zwt",
      age: 12,
    };
  },
});
