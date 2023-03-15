<template>
  <div class="main">
    <div class="mainCount">
      <div class="logo">P.F.C</div>
      <!-- <div class="logo">
        <div
          v-for="color in colors"
          :style="{ backgroundColor: color.color }"
          class="color"
        ></div>
      </div> -->
      <div class="hero">
        <h1>Welcome to Place For Comments</h1>
        <h4>
          The user has no rights and no protection, from the P.F.C community,
          good luck.
        </h4>
      </div>
      <div class="body">
        <span>
          You can log in or create user, be careful on the platform there may be
          an aggressive monkey that mom let out of the cage, good luck.
        </span>
      </div>
      <div class="bottom">
        <my-button class="longButton" @click="$router.push('/create')">
          create
        </my-button>
        <my-button class="longButton" @click="$router.push('/auth')">
          log in
        </my-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GetStartcomponent",
  data() {
    return {
      colors: [
        { color: "rgb(216, 217, 207)" },
        { color: "rgb(237, 237, 237)" },
        { color: "rgb(255, 135, 135)" },
        { color: "rgb(226, 104, 104)" },
      ],
    };
  },
};
// rgb(216, 217, 207)
// rgb(237, 237, 237)
// rgb(255, 135, 135)
// rgb(226, 104, 104)

//rgb(236, 242, 255)
//rgb(62, 84, 172)
//rgb(101, 93, 187)
//rgb(191, 172, 226)
</script>

<style scoped>
/* .logo {
  width: 100px;
  height: 100px;
  display: block;
  flex-direction: column;
  box-sizing: border-box;
  border:1px solid black;
}
.color {
  width: 100%;
  height: 100%;
} */
.mainCount {
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  padding: 5%;
  border-radius: 8px;
  position: relative;
}
.logo {
  top: 0;
  left: 0;
  position: absolute;
  width: 100px;
  height: 30px;
  box-sizing: border-box;
  background-color: rgb(216, 217, 207);
  border-radius: 2px 0px 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-large;
}
.hero {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.body {
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 30%;
}
.bottom {
  display: flex;
  flex-direction: row;
  max-width: 30%;
  height: 100%;
  align-items: end;
}
.main {
  background-color: rgb(226, 104, 104);
}

.longButton {
  width: 75px;
  margin-bottom: 5px;
}
</style>
