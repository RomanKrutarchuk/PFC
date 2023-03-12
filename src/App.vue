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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
* {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
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
