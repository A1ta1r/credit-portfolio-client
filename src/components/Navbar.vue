<template>
  <nav class="navbar navbar-toggleable-md navbar-light bg-success navbar-inverse">
    <div class="navbar" id="navbar">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :key="route.title" v-for="route in routes">
          <router-link :to="route" class="nav-link" active-class="active">
            {{ route.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
  computed: {
    routes: function () {
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
      return routes
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
