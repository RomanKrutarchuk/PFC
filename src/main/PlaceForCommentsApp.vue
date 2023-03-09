<template>
  <div class="main">
    <CreateFormComponent />
    <AuthFormComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateFormComponent from "@/components/CreateFormComponent.vue";
import AuthFormComponent from "@/components/AuthFormComponent.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    CreateFormComponent,
    AuthFormComponent,
  },
};
</script>
<style>
.main {
  width: 100%;
  height: 100%;
}
</style>
