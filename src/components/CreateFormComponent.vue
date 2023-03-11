<template>
  <div>
    <div class="form">
      <p>Create user</p>
      <input type="text" placeholder="name" v-model="form.name" />
      <input type="text" placeholder="email" v-model="form.email" />
      <input type="text" placeholder="password" v-model="form.password" />
      <button @click="createUser()">Create</button>
      <button @click="commeBack()">Return</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreateFormComponent",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    createUser() {
      if (this.form.name && this.form.email && this.form.password) {
        const user = {
          name: this.form.name,
          email: this.form.email,
          password: this.form.password,
        };
        axios
          .post("https://vercel-pfc-repository-api.vercel.app/users/userCreate", user)
          .then(console.log(`CreateFrom.CreateUser ${user.name}`))
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("empty fields");
      }
    },
    commeBack() {
      this.$router.push("/");
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
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
