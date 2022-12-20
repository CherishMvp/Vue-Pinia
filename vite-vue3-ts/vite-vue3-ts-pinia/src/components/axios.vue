<template>
  <div>
    <h2> 我是子组件axios</h2>
    <button type="reset" @click="getUser">async/await用法获取axios内容</button>
    <button type="reset" @click="getSome">axios发起多个并发请求内容</button>
    <h2>r1:{{ r1 }}----r2:{{ r2 }}</h2>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  // get请求,基本用法
  axios
    .get('/user', {
      params: {
        ID: 12345,
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // 总是会执行
    });

  // 支持async/await用法
  async function getUser() {
    try {
      // await可以直接拿到axios中.then()的内容
      const response = await axios.get('http://127.0.0.1:4523/m1/1228747-0-default/user/info');
      console.log(response);
      alert(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  //发起多个并发请求
  const r1 = ref();
  const r2 = ref();
  const getFirst = async () => {
    return await axios.get('http://127.0.0.1:4523/m1/1228747-0-default/sys/info');
  };
  const getSecond = async () => {
    return await axios.get('http://127.0.0.1:4523/m1/1228747-0-default/port/info');
  };

  const getSome = async () => {
    Promise.all([getFirst(), getSecond()]).then((res) => {
      r1.value = res[0].data.result;
      r2.value = res[1].data.result;
    });
  };
</script>

<style scoped></style>
