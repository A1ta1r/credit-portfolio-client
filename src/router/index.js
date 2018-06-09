import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Calculator from '@/components/Calculator'
import Signup from '@/components/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      title: 'Кредитный портфель',
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      title: 'Калькулятор',
      path: '/calculator',
      name: 'Calculator',
      component: Calculator
    },
    {
      title: 'Регистрация',
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
    // {
    //   path: '/user/:id',
    //   name: 'User',
    //   component: UserPage
    // },
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
