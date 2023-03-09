<template>
  <div>
    <div class="form">
      <p>write your comment</p>
      <input type="text" placeholder="name ..." v-model="form.name" />
      <input type="text" placeholder="email ..." v-model="form.email" />
      <input type="text" placeholder="text ..." v-model="form.text" />
      <button>send comment</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      form: {
        name: "",
        email: "",
        text: "",
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
