// import { defineConfig } from "@vue/cli-service";

// const config = defineConfig({
//   transpileDependencies: true,
// });

// export default defineConfig;
import URL from "./routerConfig.js"

export default {
  devServer: {
    proxy: "https://vercel-pfc-repository-api.vercel.app",
  },
};

