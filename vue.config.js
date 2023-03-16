import URL from "./routerConfig.js";
// import  defineConfig from '@vue/cli-service'

export default {
  devServer: {
    proxy: URL.api_url,
  },
  pluginOptions: {
    proxy: URL.api_url,
  },
};
