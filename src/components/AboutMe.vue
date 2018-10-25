<template>
  <div>
    <h6 class="pb-2 mb-0">About me</h6>
    <div class="input-group input-group-sm">
      <div class="input-group-append input-group-prepend">
        <span class="input-group-text" :style="{ backgroundColor: colour }"></span>
      </div>
      <input type="text" class="form-control user-colour" placeholder="Colour" v-model="colour" />
      <div class="input-group-append input-group-prepend">
        <span class="input-group-text">@</span>
      </div>
      <input type="text" class="form-control user-name" placeholder="Username" maxlength="25" v-model="username" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  props: {
    socket: Object
  },
  data() {
    return {
      colour: '',
      username: ''
    };
  },
  watch: {
    colour(value) {
      this.socket.emit('identify', value, this.username);
    },
    username(value) {
      this.socket.emit('identify', this.colour, value);
    }
  }
}
</script>

<style scoped>
.input-group-text {
  width: 32px;
}
.form-control {
  text-transform: lowercase;
}
.user-colour {
  flex: 1 1 auto;
}
.user-name {
  flex: 3 1 auto;
}
</style>
