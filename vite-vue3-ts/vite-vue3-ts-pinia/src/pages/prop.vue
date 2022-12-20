<template>
  <div id="center">
    <h2>prop page 我是父组件</h2>
    <button type="button" @click="link">link</button>
    <button type="button" @click="link2">转到axios请求页面</button>

    <h2>defineProps传参分为“运行时声明”和“基于类型的声明”(两者不能同时使用)</h2>
    <h2>接收子组件传来的信息:{{ sonToMe }}</h2>
    <h2>下面是子组件</h2>
    <hr />
    <Props :list="list" msg="父组件传递给子组件" />
    <hr />
    <Props2 @tap="handleReceive" />
    <hr />
    读取子组件defineExpose暴露的属性:<button type="reset" @click="getChildCount">点击获取</button>{{}}
    <Props3 ref="child" />
    <hr />
    <button type="reset" @click="flag = !flag">搜索内容高亮是否展示</button>
    <WordLight v-show="flag" />
    <hr />
    <!-- <vueUse /> -->
  </div>
</template>

<script setup lang="ts">
  import router from '@/router';
  import { ref } from 'vue';
  import Props from '@/components/defineProps.vue';
  import Props2 from '@/components/defineEmits.vue';
  import Props3 from '@/components/defineExpose.vue';
  import WordLight from '@/components/wordLight.vue';
  // import vueUse from "@/components/vueUse.vue";
  interface p1 {
    name: string;
    age?: number;
  }
  // props运行时声明
  // const p = defineProps({ foo: { type: String, required: true }, bar: { type: Number, required: true } });
  // props基于类型的声明(两者不能同时使用),会失去对props赋默认值的功能
  // const props1 = defineProps<p1>();
  // 通过withDefaults 解决
  const props2 = withDefaults(defineProps<p1>(), {
    name: 'hello',
    age: 12,
  });
  //ref 会根据初始化时的值推导其类型;若指定泛型参数但没有给出初始值，那么最后得到的就将是一个包含 undefined 的联合类型：
  const a = ref<string | number>('2020');
  const link = () => {
    console.log(1);
    router.push('/login');
  };
  // 定义发给子组件的信息
  const list = ref([22, '22']);
  // 定义变量接收从子组件传来的信息
  const sonToMe = ref();
  const handleReceive = (name: string | number) => {
    sonToMe.value = name;
    console.log('收到子组件传来的值：', name);
  };
  // 定义变量接收defineExpose组件暴露的属性
  const myCount = ref();
  // 定义和组件上的ref同名的属性
  const child = ref<any>(null);
  const getChildCount = () => {
    console.log(child.value.count);
    myCount.value = child.value.count;
    alert(`读取到子组件暴露的属性:${myCount.value}`);
  };
  // 定义展示wordLight开关方法
  const flag = ref(false);
  const link2 = () => {
    router.push('/axios');
  };
</script>

<style scoped></style>
