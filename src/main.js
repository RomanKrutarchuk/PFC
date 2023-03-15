import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import templates from "./templates/index";

const app = createApp(App);
templates.forEach((component) => {
  app.component(component.name, component);
});
app.use(router);
app.mount("#app");
