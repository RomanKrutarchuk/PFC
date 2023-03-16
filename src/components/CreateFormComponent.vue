<template>
  <div class="main">
    <div class="mainCount">
      <my-return-button @click="$router.push('/')">Home</my-return-button>
      <div class="hero">
        <h1>Create yourself a user</h1>
        <h4>
          The user has no rights and no protection, from the P.F.C community,
          good luck.
        </h4>
        <span>Remember all data</span>
      </div>
      <div class="body">
        <div class="reg">
          <my-input :placeholder="'name'" v-model="form.name" />
          <my-input :placeholder="'email'" v-model="form.email" />
          <my-input :placeholder="'password'" v-model="form.password" />
          <my-input
            :placeholder="'confirm password'"
            v-model="form.confirmPassword"
          />
          <div class="regBottom">
            <my-button @click="createUser()">Create</my-button>
            <my-button @click="$router.push('/auth')">Log in</my-button>
          </div>
        </div>
      </div>
      <div id="errors">
        <span v-if="error != ''">Attention: {{ error }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import URL from "../../URLconfig";
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
    async createUser() {
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
          await axios
            .post(URL.api_url+"/users/create", user)
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
  background-color: rgb(237, 237, 237);
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
  height: 70%;
  width: 50%;
  display: flex;
  flex-direction: column;
}
.reg {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.regBottom {
  display: flex;
  flex-direction: row;
}
</style>
