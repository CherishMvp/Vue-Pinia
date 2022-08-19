import { defineStore } from "pinia";
// 1.定义容器
// 2.使用容器的state
// 3.修改state
// 4.容器中的action使用

/**
 * 参数1：容器的ID（唯一），Pinia会将所有的容器挂载到根容器
 * 参数2：选项对象
 * 返回值是一个函数
 **/
export const useMainStore = defineStore("main", {
  /**
   * state
   * 类似于组件的data，存储全局状态
   * 1.必须是函数（箭头函数），箭头函数有助于ts类型推导。
   * 使用函数可以防止在服务端渲染的时候交叉请求导致数据状态污染
   **/
  state: () => {
    return {
      count: 1,
      foo: "2",
      arr: [1, 2],
    };
  },
  /**
   * getters
   * 类似于组件的computed，用来封装计算属性，有缓存功能(如在页面中调用三次，如果数值无变化则只执行一次)
   **/
  getters: {
    // ts指定返回值类型
    count10(): number {
      console.log("相当于computed，一来就调用");
      return this.count++;
    },
    // 使用state里的数据，指定数据源
    // count11(state) {
    //   return state.count++;
    // },
  },
  /**
   * actions
   * 类似于组件的methods，封装业务逻辑，修改state中数据的状态
   * actions中要使用this，所以不能使用箭头函数定义
   * (HelloWorld组件中的方式4)
   **/
  actions: {
    // 可以在使用本store（useMainStore）的时候调用actions中的方法来控制state状态
    // 定义num:number类型，可以接收从页面传来的值
    changeState(num: number) {
      // 通过this直接访问state中的数据
      // 单次修改
      this.count += num;
      this.foo = "zwt2";
      this.arr.push(666);
      // 也支持同时修改多个参数
      /*   // 对象方式
      this.$patch({
        count: this.count + 9,
        foo: this.foo + 12,
      }); */
      /*  // 函数方式
      this.$patch(state => {
        this.count++,
        this.foo + 12,
      }); */
    },
  },
});
