<template>
  <div>
    <div class="form">
      <p>Sign in</p>
      <input type="text" placeholder="name" v-model="userAuthFrom.name" />
      <input type="text" placeholder="email" v-model="userAuthFrom.email" />
      <input
        type="text"
        placeholder="password"
        v-model="userAuthFrom.password"
      />
      <button @click="getUser()">Enter</button>
      <p>{{ authErrors }}</p>
    </div>
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
    getUser() {
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
.form {
  width: 200px;
  height: 200px;
  border: 1px solid rgb(220, 220, 220);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
