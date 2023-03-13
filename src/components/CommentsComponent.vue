<template>
  <div class="main">
    <div v-if="user !== null" class="mainCount">
      <div class="body">
        <div class="comentsContainer">
          <div class="commentsField">
            <div class="comment" v-for="comment in comments">
              {{ comment.author }}: {{ comment.text }}
            </div>
          </div>
        </div>
      </div>
      <div class="interactionField">
        <input type="your comment" class="interactionInput" v-model="text" />
        <button class="interactionButton" @click="sendComment()">submin</button>
      </div>
    </div>

    <div v-else class="mainCount">
      <div class="userUndefiened">
        <span>Something went wrong...</span>
        <button @click="$router.push('/auth')">try auth</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import URL from "../../routerConfig";
import { io } from "socket.io-client";
//socket.on(event)-server send event
//socket.emit(event-name,data)-client send message
const socket = io("https://vercel-pfc-repository-api.vercel.app",{origins: '*:*'});
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      socket: null,
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
        // sendMessage(comment);
        console.log("emit comment");
        this.socket.emit("socket send message", comment);
        this.text = "";
      }
    },
    async fetchComments() {
      let response = null;
      await axios
        .get("https://vercel-pfc-repository-api.vercel.app/comments")
        .then((res) => {
          console.log("succesefull fetch comments");
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
    this.socket = socket;
    socket.on("connection_status", (data) => {
      console.log(
        `Connection to the server via socket ${data.web_socket_connection}`
      );
    });
    this.socket.on("socket send message", (data) => {
      console.log("response received from the server", data);
      this.comments.push(data.comment)
    });
    
    // console.log(this.user.name);
  },
};
</script>
<style scoped>
.mainCount {
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
}
.body {
  height: 90%;
  background-color: rgb(255, 255, 255);
  border-radius: 8px 8px 0px 0px;
  padding: 2%;
}
.comentsContainer {
  max-height: 100%;
  width: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  background-color: rgb(101, 93, 187);
  border-radius: 8px 0px 0px 8px;
}
.commentsField {
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
}
.interactionField {
  margin-top: 5px;
  flex: 1;
  background-color: rgb(255, 255, 255);
  border-radius: 0px 0px 8px 8px;
  display: flex;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
}
.interactionButton {
  height: 25px;
  width: max-content;
}
.interactionInput {
  width: 100%;
  height: 25px;
}
.comment {
  width: max-content;
  height: max-content;
  background-color: rgb(255, 255, 255);
  padding: 2px;
  margin-bottom: 5px;
  border-radius: 0px 8px 8px 0px;
}
.main {
  background-color: rgb(191, 172, 226);
}
.userUndefiened {
  width: 100%;
  height: 200px;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
/*
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
} */
</style>
