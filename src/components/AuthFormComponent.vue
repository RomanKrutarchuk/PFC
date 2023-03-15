<template>
  <div class="main">
    <div class="mainCount">
      <my-return-button @click="$router.push('/')">Home</my-return-button>
      <div class="hero">
        <h1>Authentication</h1>
        <h4>
          The user has no rights and no protection, from the P.F.C community,
          good luck.
        </h4>
        <span>Enter user data</span>
      </div>
      <div class="body">
        <my-input type="text" :placeholder="'name'" v-model="form.name" />
        <my-input type="text" :placeholder="'email'" v-model="form.email" />
        <my-input
          type="text"
          :placeholder="'password'"
          v-model="form.password"
        />
        <div class="waiting">
          <my-button @click="userAuth()">log in</my-button>
          <span v-if="waiting">please wait...</span>
          <span>{{ authErrors }}</span>
        </div>
      </div>
      <div class="bottom">
        <div>
          <h1>Attention</h1>
          <span>
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
      waiting: false,
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    userAuth() {
      if (
        this.form.name !== "" &&
        this.form.email !== "" &&
        this.form.password !== ""
      ) {
        console.log("Auth.form.emit...");
        this.waiting = true;
        const user = {
          name: this.form.name,
          email: this.form.email,
          password: this.form.password,
        };
        this.$emit("getThisUser", user);
      }
    },
  },
};
</script>

<style scoped>
.main {
  background-color: rgb(191, 172, 226);
  background-color: rgb(216, 217, 207);
}
.mainCount {
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgb(255, 255, 255);
  padding: 5%;
  border-radius: 8px;
  position: relative;
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
.waiting {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
