<template>
    <div>
      <form @submit.prevent="sendMessage">
        <label for="message">Type your message:</label>
        <input type="text" id="message" v-model="newMessage" />
        <button type="submit">Send</button>
      </form>
  
      <h2>Messages:</h2>
      <ul>
        <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
      </ul>
    </div>
  </template>
  
  <script lang="js">
  export default {
    data() {
      return {
        messages: [],
        newMessage: "",
      };
    },
  
    methods: {
      sendMessage() {
        this.messages.push(this.newMessage);
        this.newMessage = "";
      },
    },
  };
  </script>
  