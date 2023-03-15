// import { defineConfig } from "@vue/cli-service";

// const config = defineConfig({
//   transpileDependencies: true,
// });

// export default defineConfig;
export default {
  devServer: {
    proxy: "http://localhost:3000",
  },
};
