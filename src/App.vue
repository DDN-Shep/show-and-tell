<template>
  <div id="app" class="pt-5">
    <nav-bar />
    <main class="mt-5 pt-5 pt-md-3 container">
      <div class="row">
        <div class="col-md-4">
          <chat-roster :socket="socket" :roster="roster" />
        </div>
        <div class="col-md-8">
          <chat-window :socket="socket" :messages="messages" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ChatWindow from './components/ChatWindow.vue'
import ChatRoster from './components/ChatRoster.vue'

const socket = io.connect('http://localhost:1337');

let data = {
  myId: null,
  roster: [],
  messages: []
};

socket.on('connect', () => {
  console.log('Connected', data.myId = socket.id);
});

socket.on('message', (message) => {
  console.log('New message', message);

  data.messages.push(message);
});

socket.on('roster', (roster) => {
  console.log('Roster updated', roster);

  roster.forEach(i => {
    let ix = data.roster.findIndex(o => o.id === i.id);

    if (ix < 0) data.roster.push(i);
    else {
      data.roster[ix].colour = i.colour;
      data.roster[ix].username = i.username;
    }
  });
});

export default {
  name: 'app',
  components: {
    NavBar,
    ChatWindow,
    ChatRoster
  },
  data() {
    return {
      socket: socket,
      roster: data.roster,
      messages: data.messages
    };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
