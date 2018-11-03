import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/Login'
import Layout from '@/components/Layout'
import Unauthrized from '@/components/Unauthrized'

import Common from './common'
import Article from './article' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        ...Common,
        ...Article,
        {
          path: '/Unauthrized',
          name: 'Unauthrized',
          component: Unauthrized
        }
      ]
    }
  ]
})
