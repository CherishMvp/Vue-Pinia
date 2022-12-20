<template>
    <div>
        index page
        <a-button @click="change">Change</a-button>
    </div>

</template>

<script setup lang="ts">
import router from '@/router'
const change = () =>
{
    console.log(1)
}
setTimeout(() =>
{
    router.replace('/login')
    console.log(111)
}, 2000);
console.log("ssss")
</script>

<style scoped>

</style>