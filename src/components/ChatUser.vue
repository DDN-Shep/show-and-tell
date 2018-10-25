<template>
  <div class="media text-muted pt-3">
    <p class="media-body pb-3 mb-0 small lh-125">
      <strong class="d-block text-gray-dark" :style="{ color: colour }" :title="colour">@{{username}}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ChatUser',
  props: {
    colour: String,
    username: String
  }
}
</script>
