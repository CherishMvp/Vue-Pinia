<template>
  <div>
    <h2> 我是子组件defineEmits</h2>
    <h2>发送给父组件的信息：</h2><button type="reset" @click="handleSend">handleSend</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  // 定义emits的类型;有几个就在里面写几个,和声明式一样
  interface IEmits {
    (e: string, value: string): void;
  }
  const emits = defineEmits<{
    (event: string): void;
    (event: 'update', id: number): void;
    (e: string, value: string): void;
  }>();
  // const emits = defineEmits<IEmits>();
  const handleSend = () => emits('tap', 'zwt');
  // 基于类型
</script>

<style scoped></style>
