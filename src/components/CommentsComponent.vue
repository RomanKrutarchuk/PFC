<template>
  <div>
    <div class="comment" v-for="comment in comments">
      <p class="paragraph">name: {{ comment.name }} {{ comment.email }}</p>
      <p class="paragraph">text: {{ comment.text }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    comments: {
      type: Array,
      default: [],
    },
  },
};
</script>
