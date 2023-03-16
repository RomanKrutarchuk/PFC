
import URL from "./routerConfig.js";
// import  defineConfig from '@vue/cli-service'

export default {
  devServer: {
    proxy: {
      target: URL.api_url,
      ws: true,
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? "/production-sub-path/"
    : "https://vercel-pfc-repository-api.vercel.app"
}