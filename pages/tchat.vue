<template>
    <div>
      <h1>Instant Messaging Webpage</h1>
      
      <form @submit.prevent="sendMessage">
        <input type="text" v-model="newMessage" />
        <button type="submit">Send</button>
      </form>
      <div v-for="message in messages" :key="message.id">
        {{ message }}
      </div>
    </div>
  </template>
  
  <script>
  import io from 'socket.io-client'
  
  export default {
    data() {
      return {
        messages: [],
        newMessage: '',
        socket: null,
      }
    },

    mounted() {
      this.socket = io('http://localhost:3000')
      this.socket.on('connect', () => {
        console.log('Connected to server')
      })
      this.socket.on('new-message', (message) => {
        this.messages.push(message)
      })
    },
    methods: {
      sendMessage() {
        this.socket.emit('new-message', this.newMessage)
        //io.socket.emit('new-message', this.newMessage)
        this.messages.push(this.newMessage)
        this.newMessage = ''
      },
    },

  }
  </script>
  