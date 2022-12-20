<script setup lang="ts">
  import { ref } from 'vue';
  import useUserStore from '@/components/useUserStore.vue';
  defineProps<{ msg: string }>();
  interface Info {
    name: string;
    age: number;
    hoby?: string[];
  }
  const props = defineProps<Info>();
  const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <useUserStore />
</template>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
