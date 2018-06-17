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
      title: 'Регистрация',
      path: '/signup',
      name: 'Signup',
      meta: {title: 'Регистрация'},
      component: Signup
    },
    {
      title: 'Вход в систему',
      path: '/signin',
      name: 'Signin',
      meta: {title: 'Страница входа'},
      component: Signin
    },
    {
      title: 'Личный кабинет',
      path: '/user/profile',
      name: 'User',
      meta: {title: 'Личный кабинет', requiresAuth: true},
      component: UserPage
    },
    {
      title: 'Калькулятор',
      path: '/calculator',
      name: 'Calculator',
      meta: {title: 'Калькулятор'},
      component: Calculator
    },
    {
      title: 'Выход',
      path: '/signout',
      name: 'Signout',
      meta: {title: 'Выход', requiresAuth: true}
    }
  ]
})
