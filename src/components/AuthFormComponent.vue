<template>
  <div class="main">
    <div class="mainCount">
      <div class="hero">
        <h1>Authentication</h1>
        <span>Enter user data</span>
      </div>
      <div class="body">
        <input type="text" placeholder="name" v-model="userAuthFrom.name" />
        <input type="text" placeholder="email" v-model="userAuthFrom.email" />
        <input
          type="text"
          placeholder="password"
          v-model="userAuthFrom.password"
        />
        <button @click="userAuth()">log in</button>
      </div>
      <div class="bottom">
        <div>
          <h1>Attention</h1>
          <span class="danger">
            There may be a lot of swearing, because some users are monkeys that
            have been released from the cage
          </span>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "AuthFormComponent",
  props: {
    authErrors: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      userAuthFrom: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    userAuth() {
      const user = {
        name: this.userAuthFrom.name,
        email: this.userAuthFrom.email,
        password: this.userAuthFrom.password,
      };
      this.$emit("getThisUser", user);
    },
  },
};
</script>

<style scoped>
.main {
  background-color: rgb(191, 172, 226);
}
.mainCount {
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgb(255, 255, 255);
  padding: 5%;
  border-radius: 4px;
}
.hero {
  height: max-content;
  display: flex;
  flex-direction: column;
}
.body {
  height: 30%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.bottom {
  height: max-content;
  display: flex;
  justify-content: space-between;
}
</style>
