import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import templates from "./templates/index";
import axiosModule from "./modules/axios.js";

// to load custom components ==> myButton
const app = createApp(App);
templates.forEach((component) => {
  app.component(component.name, component);
});

app.config.globalProperties.$axios = axiosModule;
app.use(router);
app.mount("#app");
