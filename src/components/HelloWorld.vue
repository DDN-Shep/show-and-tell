<template>
  <div class="hello-world">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    message: ''
  }
}
</script>

<style scoped>
.hello-world {
  color: green;
}
</style>
