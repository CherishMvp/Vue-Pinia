import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
// Create app root instance
const app = createApp(App);

// Create pinia example
const pinia = createPinia();

//Mounted to vue root instance
app.use(pinia);

app.mount("#app");
