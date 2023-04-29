// store/index.js
export const state = () => ({
    messages: [],
  });
  
  export const mutations = {
    addMessage(state, message) {
      state.messages.push(message);
    },
  };