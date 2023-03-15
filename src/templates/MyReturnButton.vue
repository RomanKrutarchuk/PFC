<template>
  <button class="my-return-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-return-button",
};
</script>

<style scoped>
button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
.my-return-button {
  width: 100px;
  height: 30px;
  background-color: rgb(255, 135, 135);
  color: rgb(255, 255, 255);
  font-size: large;
  margin: none;
  border-radius: 2px;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
}
</style>
