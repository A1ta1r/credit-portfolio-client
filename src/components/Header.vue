<template>
  <header id="header-com">
    <router-link to="/" class="text-gray-dark nav-link" id="head"><h1>Веб-приложение "Кредитный портфель"</h1></router-link>
  </header>
</template>

<script>
export default {
  name: 'HeaderCom'
}
</script>

<style scoped>
  #header-com {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
    text-align: center;
  }

  #header-com > * {
    padding: 15px;
    -webkit-flex: 1 100%;
    flex: 1 100%;
  }
</style>
