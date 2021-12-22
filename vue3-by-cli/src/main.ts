import "babel-polyfill";
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
require("babel-polyfill");

createApp(App).use(store).use(router).mount("#app");
