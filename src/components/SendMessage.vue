<template>
  <form v-on:submit="sendMessage">
    <div class="form-group row mb-0">
      <div class="col-sm-10">
        <input type="text" class="form-control form-control-sm" placeholder="Send message" v-model="message" />
      </div>
      <div class="col-sm-2 pt-2 pt-sm-0 pl-sm-0">
        <input type="submit" class="btn btn-sm btn-primary send-button" value="Send" />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SendMessage',
  props: {
    socket: Object
  },
  data() {
    return {
      message: ''
    };
  },
  methods: {
    sendMessage(event) {
      event.preventDefault();
      
      this.socket.emit('message', this.message);
      this.message = '';
    }
  }
}
</script>

<style scoped>
.send-button {
  width: 100%;
}
</style>
