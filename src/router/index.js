import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Layout from '@/components/Layout'
import Unauthrized from '@/components/Unauthrized'

import Common from './common'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        ...Common,
        {
          path: '/Unauthrized',
          name: 'Unauthrized',
          component: Unauthrized
        }
      ]
    }
  ]
})
