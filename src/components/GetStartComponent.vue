<template>
  <div>
    <div class="welcome box">
      <h1>Welcome to Place For Comments</h1>
      <h5>
        you need to <router-link to="/create">create user</router-link> or
        <router-link to="/auth">login</router-link>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetStartcomponent",
};
</script>

<style scoped>
.welcome {
  width: 1000px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
