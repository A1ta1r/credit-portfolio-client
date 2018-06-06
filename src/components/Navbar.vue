<template>
  <nav class="d-inline-flex flex-row justify-content-center align-items-center">
    <!-- Links -->
    <router-link to="/calculator">Кредитный калькулятор</router-link>
    <router-link to="/user">Профиль</router-link>  <!-- TODO динамически менять на компонент signin, когда нужно-->
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style scoped>
  a {
    color: #42b983;
    margin: 0 16pt;
  }
</style>
