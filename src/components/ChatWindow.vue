<template>
  <div>
    <div class="p-3 rounded bg-white shadow-sm">
      <send-message :socket="socket" />
    </div>
    <div class="my-2 p-3 rounded bg-white shadow-sm">
      <h6 class="pb-2 mb-0 border-bottom border-gray">Chat window</h6>
      <chat-message v-for="i in messages.slice().reverse()" :key="i.id" :colour="i.colour" :username="i.username" :message="i.message" />
    </div>
  </div>
</template>

<script>
import AboutMe from './AboutMe.vue'
import ChatMessage from './ChatMessage.vue'
import SendMessage from './SendMessage.vue'

export default {
  name: 'ChatWindow',
  components: {
    AboutMe,
    ChatMessage,
    SendMessage
  },
  props: {
    socket: Object,
    messages: Array
  }
}
</script>