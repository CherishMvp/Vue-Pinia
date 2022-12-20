<template>
  <div>
    <h2>{{ data }}</h2>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import API from '@/api';
  const data = ref({});
  const requestRes = async () => {
    let result = await API.login('admin', 'admin');
    data.value = result.data;
    console.log('data:', data.value);
  };
  onMounted(async () => requestRes());
</script>

<style scoped></style>
