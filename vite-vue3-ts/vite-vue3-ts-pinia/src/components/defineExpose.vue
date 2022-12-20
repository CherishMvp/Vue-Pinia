<template>
  <div>
    <h2> 我是子组件defineExpose.可以暴露我的属性给其他组件使用</h2>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const count = ref(999);
  defineExpose({
    count,
  });
</script>

<style scoped></style>
