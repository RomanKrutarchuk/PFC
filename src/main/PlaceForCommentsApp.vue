<template>
  <div class="main">
    <router-view @createUser="createUser($event)"/>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      page: "createForm",
      comments: [],
    };
  },
  methods: {
    createUser(user) {
      console.log("user went to DB",user);
      axios.post("http://localhost:3000/users/userCreate", user).catch((err) => {
        console.log(err);
      });
    },
    async getPost() {
      let response = null;
      await axios
        .get("http://localhost:3000/comments")
        .then((res) => {
          console.log("axios.get.comments response:", res.data);
          response = res.data;
        })
        .catch((error) => {
          console.log("failed to connect", error);
        });
      this.comments = response;
      response = null;
    },
    sendComment() {
      const req = {
        name: this.form.name,
        email: this.form.email,
        text: this.form.text,
      };
      console.log("Axios.post.req", req);
      axios.post("http://localhost:3000/comments", req).catch((err) => {
        console.log(err);
      });
    },
  },
  mounted() {
    // this.getPost();
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
.box{
  border: 1px solid rgb(220, 220, 220);
  box-sizing: border-box;
}
</style>
