<template>
  <div> {{ userStore.name }}---{{ userStore.age }} </div>
</template>

<script setup lang="ts">
  import { useUserStore } from '@/store/user';
  const arrow = (x: any) => {
    console.log(x);
  };
  const userStore = useUserStore();
  setTimeout(() => {
    userStore.changeName('xswl');
  }, 1000);
  setTimeout(() => {
    userStore.counter;
  }, 2000);
</script>

<style scoped></style>
