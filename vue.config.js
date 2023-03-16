import URL from "./routerConfig.js";
// import  defineConfig from '@vue/cli-service'

const filter = function (pathname, req) {
  return pathname.match("^/api") && req.method === "GET";
};

export default {
  devServer: {
    proxy: URL.api_url,
  },
  pluginOptions: {
    proxy: {
      context: filter,
      options: {
        target: "http://www.example.org",
      },
    },
  },
};
