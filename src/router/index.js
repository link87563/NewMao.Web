import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Layout from '@/components/Layout'
import Unauthrized from '@/components/Unauthrized'

import HelloWorld from '@/components/HelloWorld'

import Common from './common'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '',
      name: 'Layout',
      component: Layout,
      children: [
        // ...Common
        {
          path: 'HelloWorld',
          name: 'HelloWorld',
          component: HelloWorld
        },
      ]
    },
    {
      path: '/Unauthrized',
      name: 'Unauthrized',
      component: Unauthrized
    }
  ]
})
