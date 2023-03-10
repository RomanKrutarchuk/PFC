<template>
  <div class="main">
    <PlaceForCommentsApp />
  </div>
</template>

<script>
import PlaceForCommentsApp from "./main/PlaceForCommentsApp.vue";
export default {
  components: {
    PlaceForCommentsApp,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  width: 100%;
  height: 100%;
}
body {
  margin: 0px;
  padding: 0px;
  display: flex;
  width: 100%;
  height: 100%;
}
#app {
  margin: 0px;
  padding: 0px;
  display: flex;
  width: 100%;
  height: 100%;
}
.main {
  width: 100%;
  height: 100%;
}
</style>
