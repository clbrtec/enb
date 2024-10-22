<template>
  <router-view/>
</template>

<style>
html {
  width: 100%;
  height: 100%;
  margin: 0
}

body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
}

@font-face {
  font-family: Gordita;
  src: url('./assets/gordita.otf');
}

@font-face {
  font-family: Poppins;
  src: url('./assets/Poppins.ttf');
}

@font-face {
  font-family: Arima;
  src: url('./assets/Arima.ttf');
}

#app {
  width: 100%;
  height: 100%;
  font-family: Arima, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
