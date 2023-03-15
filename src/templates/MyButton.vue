<template>
  <button class="my-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
button{
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}
.my-button{
width: 100px;
height: 30px;
background-color: rgb(255, 135, 135);
color: rgb(255, 255, 255);
font-size: large;
margin: 5px;
border-radius: 2px;
}
</style>
