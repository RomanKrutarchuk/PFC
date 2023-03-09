<template>
  <div class="main">
    <CreateFormComponent
      v-if="this.page === 'createForm'"
      @changeForm="this.page = 'authForm'"
      @createUser="createUser($event)"
    />
    <AuthFormComponent v-if="this.page === 'authForm'" />
    <CommentsComponent v-if="this.page === 'comments'" />
  </div>
</template>

<script>
import CreateFormComponent from "@/components/CreateFormComponent.vue";
import AuthFormComponent from "@/components/AuthFormComponent.vue";
import CommentsComponent from "@/components/CommentsComponent.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    CreateFormComponent,
    AuthFormComponent,
    CommentsComponent,
  },
  data() {
    return {
      page: "createForm",
      comments: [],
    };
  },
  methods: {
    createUser(user) {
      console.log(user);
      axios.post("http://localhost:3000/createUser", user).catch((err) => {
        console.log(err);
      });
    },
    // async axiosPost() {
    //   axios.post("http://localhost:3000/comments").catch((err) => {
    //     console.log(err);
    //   });
    // },
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
</style>
