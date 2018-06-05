import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Calculator from '@/components/Calculator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/calculator',
      name: 'Calculator',
      component: Calculator
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
