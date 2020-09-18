import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import Hellos from '../components/Hellos';
import Master from '../components/Master';
import Quill from '../components/Quill';
import Home from '../components/Home';

Vue.use(Router)

export default new Router({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Hellos',
      name: 'Hellos',
      component: Hellos
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Master/:count/:type',
      name: 'Master',
      component: Master
    },
    {
      path: '/Quill',
      name: 'Quill',
      component: Quill
    },
    {
      path: 'Home',
      name: 'Home',
      component: Home
    },
  ]
})
