<template>
  <div class="main">
    <router-view
      :authErrors="authErrors"
      :user="user"
      @getThisUser="getUser($event)"
    />
  </div>
</template>

<script>
import axios from "axios";
import URL from "../../URLconfig";

export default {
  name: "App",
  data() {
    return {
      user: null,
      comments: [],
      authErrors: null,
      connection: null,
    };
  },
  methods: {
    async getUser(user) {
      // console.log(URL);
      // console.log(process.env);
      // console.log(api_url);
      await axios
        .post(URL.api_url + "/users", user)
        .then((res) => {
          // console.log(res);
          if (res.data.status === "authorized") {
            console.log("you have successfully authorized");
            this.authErrors = null;
            this.$router.push("/comments");
            const user = {
              name: res.data.user.name,
              email: res.data.user.email,
            };
            this.user = user;
          } else if (res.data.status === "invalid passoword") {
            this.authErrors = "invalid passoword";
          } else if (res.data.status === "user_not_defiened") {
            this.authErrors = "User not exist";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.connection = new WebSocket(URL.ws_api_url,"wss://");
    this.connection.onopen = (event) => {
      console.log("Successfully connected to websocket server...");
    };
  },
};
</script>

<style>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
span {
  padding: 0px;
  margin: 0px;
}
</style>
