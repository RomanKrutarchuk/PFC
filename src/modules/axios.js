import axios from 'axios';

const instance = axios.create({
  baseURL: "http://46.55.120.126/",
});

export default instance;