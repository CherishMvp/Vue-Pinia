import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";

//创建 app 实例
const app = createApp(App);
// 创建 pinia 实例
const pinia = createPinia();
// 使用pinia实例
app.use(pinia);
// 挂载app
app.mount("#app");
