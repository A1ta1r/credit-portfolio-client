// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap-css'
import VeeValidate from 'vee-validate'
import ru from 'vee-validate/dist/locale/ru'
import axios from 'axios'
import VueNumeric from 'vue-numeric'
import {clearCredentials, refreshToken} from './services/auth'

VeeValidate.Validator.localize('ru', ru)

Vue.use(VeeValidate)
Vue.use(VueNumeric)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    refreshToken().then((isTokenValid) => {
      if (isTokenValid) {
        document.title = to.meta.title !== undefined ? to.meta.title : 'Кредитный портфель'
        next()
      } else {
        clearCredentials()
        router.push('/signin')
      }
    }).catch(() => {
      clearCredentials()
      router.push('/signin')
    })
  } else {
    document.title = to.meta.title !== undefined ? to.meta.title : 'Кредитный портфель'
    next()
  }
})

export const HTTP = axios.create({
  // baseURL: 'https://protected-badlands-94104.herokuapp.com/'
  baseURL: 'http://localhost:8000'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
