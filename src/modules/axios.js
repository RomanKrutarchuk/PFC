import axios from 'axios';

const instance = axios.create({
  baseURL: "http://46.55.120.126/",
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YourAccessToken' 
  }
});

export default instance;