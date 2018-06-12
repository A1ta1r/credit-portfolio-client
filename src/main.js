// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap-css'
import VeeValidate from 'vee-validate'
import ru from 'vee-validate/dist/locale/ru'
import axios from 'axios'

VeeValidate.Validator.localize('ru', ru)
Vue.use(VeeValidate)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.title !== undefined ? to.meta.title : 'Кредитный портфель'
  next()
})

export const HTTP = axios.create({
  baseURL: location.hostname === 'localhost' ? 'http://localhost:8000' : 'https://protected-badlands-94104.herokuapp.com',
  headers: {
    Authorization: 'Bearer {token}'
  }
})

console.log(Object.keys(HTTP.defaults.headers))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
