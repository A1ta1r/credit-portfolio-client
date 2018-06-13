import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Calculator from '@/components/Calculator'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import UserPage from '@/components/UserPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      title: 'Кредитный портфель',
      path: '/',
      name: 'HelloWorld',
      meta: {title: 'Кредитный портфель'},
      component: HelloWorld
    },
    {
      title: 'Калькулятор',
      path: '/calculator',
      name: 'Calculator',
      meta: {title: 'Калькулятор'},
      component: Calculator
    },
    {
      title: 'Вход в систему',
      path: '/signin',
      name: 'Signin',
      meta: {title: 'Страница входа'},
      component: Signin
    },
    {
      title: 'Регистрация',
      path: '/signup',
      name: 'Signup',
      meta: {title: 'Регистрация'},
      component: Signup
    },
    {
      title: 'Личный кабинет',
      path: '/user/:id',
      name: 'User',
      meta: {title: 'Личный кабинет'},
      component: UserPage
    }
    // {
    //   path: '/advertiser/:id',
    //   name: 'Advertiser',
    //   component: AdvertiserPage
    // },
    // {
    //   path: '/advertiser/:id/ads',
    //   name: 'Ads',
    //   component: AdsPage
    // }
  ]
})
