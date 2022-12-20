import { createApp } from 'vue'
import './style.css'
import  "@/style/index.less";
import App from './App.vue'
import store from "./store";
import router from "./router";
// createApp(App).mount('#app')

// create app 
const app = createApp(App);

// mounted pinia app

app.use(store);

// mounted vue router

app.use(router);
// mounted vue app

app.mount('#app');



