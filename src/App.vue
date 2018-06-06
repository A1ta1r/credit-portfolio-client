<template>
  <div id="app">
    <header-com></header-com>
    <navbar></navbar><hr>
    <router-view></router-view><hr>
    <footer-com></footer-com>
  </div>
</template>

<script>
import HeaderCom from './components/Header'
import FooterCom from './components/Footer'
import SidebarCom from './components/Sidebar'
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar,
    HeaderCom,
    FooterCom,
    SidebarCom
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
