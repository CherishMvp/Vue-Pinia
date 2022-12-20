<template>
  <div>
    <h2> 我是子组件defineProps</h2>
    <h3>收到信息：{{ info.list }}---{{ info.msg }}</h3>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  interface P {
    list: Array<string | number>;
    msg: string;
  }
  // const info = defineProps<P>();
  // 默认信息
  const info = withDefaults(defineProps<P>(), {
    list: () => [1, '2'],
    msg: '我是默认信息',
  });
</script>

<style scoped></style>
