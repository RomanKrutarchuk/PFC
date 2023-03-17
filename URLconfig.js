// const PRODUCTION_URL = "https://vercel-pfc-repository-api.vercel.app";
// const localhost = "http://localhost:3000";

const api_url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://vercel-pfc-repository-api.vercel.app";
const ws_api_url =
  process.env.NODE_ENV === "development"
    ? "ws://localhost:3000/wss"
    : "wss://vercel-pfc-repository-api.vercel.app/wss";

export default {
  api_url,
  ws_api_url,
};
