<template>
  <v-app >
    <router-view />
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');
  * {
    margin: 0;
    padding: 2;
    outline: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    height: 100%;
  }
  #app {
    font-family: 'Roboto', sans-serif;
    background-color: #424242;
    -webkit-font-smoonthing: antialiased !important;
  }
  ul {
    list-style: none;
  }
</style>
