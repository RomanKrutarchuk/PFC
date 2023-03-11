<template>
  <div class="main">
    <div class="sidebar">
      <span>Profile name: {{ user.name }}</span>
    </div>
    <div class="comentsContainer">
      <div class="commentsField">
        <div v-if="comments != null" class="block">
          <span v-for="comment in comments"
            >-{{ comment.author }}: "{{ comment.text }}"</span
          >
        </div>
      </div>
      <div class="interactionField">
        <textarea v-model="text"></textarea>
        <button class="button" @click="sendComment()">submin</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//first comment in my life on this page
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      text: "",
      comments: null,
    };
  },
  methods: {
    sendComment() {
      if (this.text.length > 3) {
        const comment = {
          text: this.text,
          author: {
            name: this.user.name,
            email: this.user.email,
          },
        };
        axios
          .post("https://vercel-pfc-repository-api.vercel.app/comments/create", comment)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        this.text = "";
        this.fetchComments();
      }
    },
    async fetchComments() {
      let response = null;
      await axios
        .get("https://vercel-pfc-repository-api.vercel.app/comments")
        .then((res) => {
          console.log("succesefull fetch comments", res.data);
          response = res.data;
        })
        .catch((error) => {
          console.log("failed to fetch comments", error);
        });
      this.comments = response;
    },
  },
  mounted() {
    this.fetchComments();
  },
};
</script>
<style scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.sidebar {
  flex: 1;
  box-sizing: border-box;
  border-right: 1px solid rgb(220, 220, 220);
  height: 100%;
}
.userIcon {
  box-sizing: border-box;
  border-radius: 50%;
  background-color: rgb(158, 158, 158);
  border: 1px solid rgb(220, 220, 220);
  width: 50px;
  height: 50px;
}
.comentsContainer {
  flex: 5;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.commentsField {
  flex: 1;
  overflow-y: scroll;
}
.block{
  display: flex;
  flex-direction: column;
}
.interactionField {
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  border-top: 1px solid rgb(220, 220, 220);
  display: flex;
  flex-direction: row;
}
textarea {
  flex: 9;
  height: 100px;
  padding: 2px 2px;
  box-sizing: border-box;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 4px;
  background-color: rgb(250, 250, 250);
  resize: none;
}
.button {
  flex: 1;
  height: 100px;
}
</style>
