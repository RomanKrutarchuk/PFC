<template>
  <div class="main">
    <div class="mainCount">
      <div class="hero">
        <h1>Create yourself a user</h1>
        <span>Remember all data</span>
      </div>
      <div class="body">
        <input type="text" placeholder="name" v-model="form.name" />
        <input type="text" placeholder="email" v-model="form.email" />
        <input type="text" placeholder="password" v-model="form.password" />
        <input
          type="text"
          placeholder="confirm password"
          v-model="form.confirmPassword"
        />
        <button @click="createUser()">Create</button>
      </div>
      <div id="errors">
        <span v-if="error != ''">Attention: {{ error }}</span>
      </div>
      <div class="bottom">
        <span>already have a user?</span>
        <div>
          <span>if you don't care to do </span>
          <button @click="$router.push('/auth')">log in</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreateFormComponent",
  data() {
    return {
      error: "",
      form: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    createUser() {
      if (
        (this.form.name !== "",
        this.form.email !== "",
        this.form.password !== "",
        this.form.confirmPassword !== "")
      ) {
        if (this.password === this.confirmPassword) {
          this.error = "";
          const user = {
            name: this.form.name,
            email: this.form.email,
            password: this.form.password,
          };
          axios
            .post(
              "https://vercel-pfc-repository-api.vercel.app/users/userCreate",
              user
            )
            .then((res) => {
              console.log(`CreateFrom.CreateUser ${user.name}`);
              this.$router.push("/auth");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          (this.error = "incorrect confirm password"),
            console.log("incorrect confirm password");
        }
      } else {
        (this.error = "empty fields"), console.log("empty fields");
      }
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
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
