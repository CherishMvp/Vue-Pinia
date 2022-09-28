<template>
  <div class="login-page">
    <el-form label-width="120px">
      <el-form-item label="用户密码">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.password" type="password"></el-input>
      </el-form-item>
      <div style="text-align: center">
        <el-button @click="loginClick">登录</el-button>
        <el-button @click="registerClick">注册</el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { reactive } from "vue";

let formData = reactive({
  username: "",
  password: "",
});
// 登入点击
const loginClick = () => {
  console.log(formData);
  axios.post("/talk/login", formData).then((res) => {
    console.log(res);
  });
};
// 注册点击
const registerClick = () => {
  axios.post("/talk/register", formData).then((res) => {
    console.log(res);
  });
};
</script>
<style scoped lang="scss">
.login-page {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
