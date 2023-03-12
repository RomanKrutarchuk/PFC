<template>
  <div class="main">
    <div class="mainCount">
      <div class="hero">
        <h5>P.F.C</h5>
        <div>
          <span>if you don't care to do </span>
          <button @click="$router.push('/auth')">log in</button>
        </div>
      </div>
      <div class="body">
        <div class="bodyHero">
          <div>
            <h1>Welcome to Place For Comments</h1>
            <span>Come and write to your kents</span>
          </div>
        </div>
        <div class="bodyBottom">
          <div>
            <h1>Attention</h1>
            <span class="danger">
              There may be a lot of swearing, because some users are monkeys
              that have been released from the cage
            </span>
          </div>
        </div>
      </div>
      <div class="hero">
        <h5>If you agree with everything</h5>
        <div>
          <span>try to create a user </span>
          <button @click="$router.push('/create')">create</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetStartcomponent",
};
//rgb(236, 242, 255)
//rgb(62, 84, 172)
//rgb(101, 93, 187)
//rgb(191, 172, 226)
</script>

<style scoped>
.mainCount {
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  padding: 5%;
  border-radius: 8px;
}
.hero {
  height: 10%;
  display: flex;
  justify-content: space-between;
}
.body {
  height: 90%;
  display: flex;
  flex-direction: column;
}
.bodyHero {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50%;
}
.bodyBottom {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50%;
}
.main {
  background-color: rgb(191, 172, 226);
}
</style>
