import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hellos from '@/components/Hellos'
import Master from '@/components/Master'

Vue.use(Router)

export default new Router({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Hellos',
      name: 'Hellos',
      component: Hellos
    },
    {
      path: '/Master/:count/:type',
      name: 'Master',
      component: Master
    }
  ]
})
