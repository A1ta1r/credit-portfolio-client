<template>
  <div id="app">
    <navbar></navbar><hr>
    <router-view></router-view><hr>
    <footer-com></footer-com>
  </div>
</template>

<script>
import FooterCom from './components/Footer'
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar,
    FooterCom
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
