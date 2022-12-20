<template>
  <div id="center">
    <h2>login page</h2>
    <button type="submit" @click="link">link</button>
    <!-- <vueUse /> -->
    <h2>监听actions变化</h2>
    <h2>name:{{ userInfo.name }}</h2> <button type="submit" @click="change('zwt')">修改名字（监听actions变化）</button>
  </div>
</template>

<script setup lang="ts">
  import router from '@/router';
  import { useUserStore } from '@/store/user';
  // import vueUse from "@/components/vueUse.vue";
  const link = () => {
    console.log(222);
    router.push('/prop');
    console.log(33);
  };

  // 监听actions变化
  const userInfo = useUserStore();
  const change = (a: string) => {
    userInfo.changeName(a);
    info();
  };
  const info = userInfo.$onAction(
    ({
      name, // action 的名字
      store, // store 实例
      args, // 调用这个 action 的参数
      after, // 在这个 action 执行完毕之后，执行这个函数
      onError, // 在这个 action 抛出异常的时候，执行这个函数
    }) => {
      // 记录开始的时间变量
      const startTime = Date.now();
      // 这将在 `store` 上的操作执行之前触发
      console.log(`Start "${name}" with params [${args.join(', ')}].`);

      // 如果 action 成功并且完全运行后，after 将触发。
      // 它将等待任何返回的 promise
      after((result) => {
        console.log(`Finished "${name}" after ${Date.now() - startTime}ms.\nResult: ${result}.`);
      });

      // 如果 action 抛出或返回 Promise.reject ，onError 将触发
      onError((error) => {
        console.warn(`Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`);
      });
    },
  );
</script>

<style scoped></style>
