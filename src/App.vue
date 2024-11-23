<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  /* background-color: #a44f6a; Change this to your desired background color */
  /* background-color: #a44f6a; Change this to your desired background color */
  background-image: url('./assets/bgimage.jpg'); /* Change this to your desired background image */
  background-size: cover; /* Ensure the background image covers the entire area */
  background-repeat: no-repeat; /* Prevent the background image from repeating */
  background-position: center; /* Center the background image */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 300px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
}
</style>