<template>
  <div>
    <div class="form">
      <p>Create user</p>
      <input type="text" placeholder="name" v-model="form.name" />
      <input type="text" placeholder="email" v-model="form.email" />
      <input type="text" placeholder="password" v-model="form.password" >
      <button>Create</button>
    </div>
  </div>
</template>

<script>
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
