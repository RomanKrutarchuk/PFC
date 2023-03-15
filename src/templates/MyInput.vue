<template>
  <input
    :placeholder="placeholder"
    :value="modelValue"
    @input="updateInput"
    class="my-input"
  />
</template>

<script>
export default {
  name: "my-input",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      Number,
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style scoped>
textarea,
input {
  outline: none;
}
.my-input {
  width: 100%;
  height: 30px;
  color: rgb(0, 0, 0);
  background-color: white;
  font-size: large;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 2px;
  margin: 5px;
}
</style>
