<template>
  <nav class="navbar navbar-toggleable-sm navbar-light bg-success navbar-inverse">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link :to="main" class="nav-link" active-class="active">{{ main.title }}</router-link>
      </li>
      <li class="nav-item">
        <router-link v-if="!isLoggedIn" :to="signup" class="nav-link" active-class="active">{{ signup.title }}</router-link>
      </li>
      <li class="nav-item">
        <router-link v-if="!isLoggedIn" :to="signin" class="nav-link" active-class="active">{{ signin.title }}</router-link>
      </li>
      <li class="nav-item">
        <router-link v-if="isLoggedIn" :to="userpage" class="nav-link" active-class="active">{{ userpage.title }}</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="calculator" class="nav-link" active-class="active">{{ calculator.title }}</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="signout" v-if="isLoggedIn" class="nav-link" v-bind:onclick="clearCredentials">{{ signout.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
  data () {
    return {
      main: '',
      calculator: '',
      signin: '',
      signup: '',
      signout: '',
      userpage: '',
      isLoggedIn: this.checkLoggedIn()
    }
  },
  created: function () {
    let routes = []
    for (let i in this.$router.options.routes) {
      if (!this.$router.options.routes.hasOwnProperty(i)) {
        continue
      }
      let route = this.$router.options.routes[i]
      if (route.hasOwnProperty('title')) {
        routes.push(route)
      }
    }
    this.main = routes[0]
    this.signup = routes[1]
    this.signin = routes[2]
    this.userpage = routes[3]
    this.calculator = routes[4]
    this.signout = routes[5]
    this.checkLoggedIn()
  },
  methods: {
    clearCredentials: function () {
      console.log('hello')
      localStorage.removeItem('username')
      localStorage.removeItem('token')
    },
    checkLoggedIn: function () {
      console.log(localStorage.getItem('username') !== null && localStorage.getItem('token') !== null)
      this.isLoggedIn = localStorage.getItem('username') !== null && localStorage.getItem('token') !== null
    }
  },
  watch: {
    '$route' (to, from) {
      this.checkLoggedIn()
      console.log(to)
      if (to.name === this.signout.name) {
        console.log(to.name)
        this.clearCredentials()
        this.$router.push('/')
      }
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
