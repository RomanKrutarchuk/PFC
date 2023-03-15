<template>
  <div class="main">
    <div v-if="user !== null" class="mainCount">
      <div class="hero">
        <my-return-button @click="$router.push('/'), userLeave()"
          >Home</my-return-button
        >
      </div>
      <div class="body">
        <div class="comentsContainer">
          <div class="commentsField">
            <div class="comment" v-for="comment in comments">
              <div class="author">{{ comment.author }}:</div>
              {{ comment.text }}
            </div>
          </div>
        </div>
      </div>
      <div class="interactionField">
        <my-input
          type="your comment"
          @keyup.enter="sendComment()"
          v-model="text"
        />
        <my-button @click="sendComment()">sub</my-button>
      </div>
    </div>

    <div v-else class="userUndefienedBox">
      <div class="userUndefiened">
        <span>Something went wrong...</span>
        <my-button @click="$router.push('/auth')">try auth</my-button>
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
let options = {
  rememberUpgrade: true,
  transports: ["websocket"],
  secure: true,
  rejectUnauthorized: false,
};
let socket = io("/");
export default {
  props: {
    user: {
      type: Object,
      default: null,
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
    userLeave() {
      socket = null;
      console.log("Disconnected from socket");
      console.log("User has leave");
      this.socket = null;
      this.text = "";
      this.comment = null;
    },
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
        .get("/comments")
        .then((res) => {
          // console.log(res.data);
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
    if (this.user !== null) {
      socket = io("/");
      this.fetchComments();
      this.socket = socket;
      socket.on("connection_status", (data) => {
        console.log(
          `Connection to the server via socket ${data.web_socket_connection}`
        );
      });
      this.socket.on("socket send message", (data) => {
        console.log("response received from the server", data);
        this.comments.push(data.comment);
      });
    } else {
      socket = null;
      console.log("Disconnected from socket");
      console.log("We lost a user");
    }

    // console.log(this.user.name);
  },
};
</script>
<style scoped>
.mainCount {
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  background-color: rgb(237, 237, 237);
  position: relative;
}
.hero {
  height: 10%;
}
.body {
  height: 90%;
  border-radius: 2px 2px 0px 0px;
  padding: 2%;
}
.comentsContainer {
  max-height: 100%;
  width: 100%;
  overflow-y: scroll;
  box-sizing: border-box;

  border-radius: 2px;
  overflow-x: none;
}
.commentsField {
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
}
.interactionField {
  flex: 1;
  background-color: rgb(237, 237, 237);
  border-radius: 0px 0px 2px 2px;
  display: flex;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
}
.comment {
  width: max-content;
  height: max-content;
  max-width: 500px;
  background-color: rgb(255, 255, 255);
  padding: 2px;
  margin-bottom: 5px;
  border-radius: 2px;
  margin-left: 5px;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid black;
}
.main {
  background-color: rgb(216, 217, 207);
}
.userUndefienedBox {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 10%;
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
.author {
  width: max-content;
  font-size: large;
  font-weight: 200;
}
</style>
