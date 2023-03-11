<template>
  <div class="main">
    <router-view :authErrors="authErrors" :user="user" @getThisUser="getUser($event)" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      user: null,
      comments: [],
      authErrors: null,
    };
  },
  methods: {
    async getUser(user) {
      await axios
        .post("https://vercel-pfc-repository-api.vercel.app/users", user)
        .then((res) => {
          console.log(res);
          if (res.data.status === "authorized") {
            console.log("you have successfully authorized");
            this.authErrors = null;
            this.$router.push("/comments");
            this.user = res.data.user
          } else if (res.data.status === "invalid passoword") {
            this.authErrors = "invalid passoword";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
.box {
  border: 1px solid rgb(220, 220, 220);
  box-sizing: border-box;
}
</style>
