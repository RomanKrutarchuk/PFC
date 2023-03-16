
import URL from "./routerConfig.js";
// import  defineConfig from '@vue/cli-service'

export default {
  devServer: {
    proxy: {
      target: URL.api_url,
      ws: true,
    },
  },
  publicPath: "https://vercel-pfc-repository-api.vercel.app"
}