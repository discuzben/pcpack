import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pc/components/Layout'

Vue.use(Router)

export default new Router({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    }
  ]
})
