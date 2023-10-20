<template>
  <div class="main">
    <p>axios_to_api: {{ axiosConnection }}</p>
    <p>web_socket_connection: {{ socketConnection }}</p>
  </div>
</template>

<script>
import { io } from "socket.io-client";

export default {
  name: "Sage",
  data() {
    return {
      axiosConnection: false,
      socketConnection: false,
      socket: null,
    };
  },
  methods: {
    getAxiosConnection() {
      this.$axios.get().then((response) => {
        if (response) {
          this.axiosConnection = true;
        }
      });
    },
    getSocketConnection() {
      this.socket = io("http://46.55.120.126");
      this.socket.on("connect", () => {
        this.socketConnection = true;
      });
    },
  },
  mounted() {
    this.getAxiosConnection();
    this.getSocketConnection();
  },
};
</script>

<style scoped>
.main {
  background-color: black;
  color: green;
  padding: 10px;
  justify-content: start;
  align-items: start;
  flex-direction: column;
}
p{
  margin: 2px;
}
</style>
