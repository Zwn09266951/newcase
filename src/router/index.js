import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/'
import car from '@/components/car/'
import server from '@/components/server/'
import self from '@/components/self/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/car',
      name: 'car',
      component: car
    },
    {
      path: '/server',
      name: 'server',
      component: server
    },
    {
      path: '/self',
      name: 'self',
      component: self
    }
  ]
})
