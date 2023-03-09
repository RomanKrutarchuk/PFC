<template>
  <div class="home">
    <h1>main</h1>
    <FormComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import FormComponent from '@/components/FormComponent.vue'
import axios from "axios"

export default {
  name: 'HomeView',
  components: {
    FormComponent
  }
}
</script>
