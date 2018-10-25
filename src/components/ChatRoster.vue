<template>
  <div>
    <div class="p-3 rounded bg-white shadow-sm">
      <about-me :socket="socket" />
    </div>
    <div class="my-2 p-3 rounded bg-white shadow-sm">
      <h6 class="pb-2 mb-0 border-bottom border-gray">Chat roster</h6>
      <chat-user v-for="i in roster" :key="i.id" :colour="i.colour" :username="i.username" />
    </div>
  </div>
</template>

<script>
import AboutMe from './AboutMe.vue'
import ChatUser from './ChatUser.vue'

export default {
  name: 'ChatRoster',
  components: {
    AboutMe,
    ChatUser
  },
  props: {
    socket: Object,
    roster: Array
  }
}
</script>