<template>
  <div class="media text-muted pt-3">
    <div class="user-colour mr-2 rounded" :style="{ backgroundColor: colour }"></div>
    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
      <strong class="d-block text-gray-dark">@{{username}}</strong> {{message}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ChatMessage',
  props: {
    colour: '',
    username: '',
    message: ''
  }
}
</script>

<style scoped>
.user-colour {
  height: 32px;
  width: 32px;
}
</style>
