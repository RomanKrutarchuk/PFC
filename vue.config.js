// import { defineConfig } from "@vue/cli-service";

// const config = defineConfig({
//   transpileDependencies: true,
// });

// export default defineConfig;
import URL from "./routerConfig.js"

export default {
  devServer: {
    proxy: URL.api_url,
  },
};

