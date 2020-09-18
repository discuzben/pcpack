import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pc/components/Layout'
import workbench from '@/pc/workbench/workbench'
import typeSelect from '@/pc/workbench/typeSelect'
import apps from '@/pc/workbench/apps'
import reward from '@/pc/workbench/reward'
import projectAdd from '@/pc/workbench/project'
import project from '@/pc/projects/project'
import plan from '@/pc/plan/plan'
import personalCenter from '@/pc/personalCenter/personalCenter'
import login from '@/pc/account/login'
import forgetPass from "@/pc/account/forgetPass";
import register from '@/pc/account/register'

import worktable from '@/pc/worktable/worktable'

Vue.use(Router)

export default new Router({
  mode: "history",
  linkActiveClass: "active",
  routes: [{
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/workbench',
      redirect: '/workbench/publish',
      component: workbench,
      children: [{
          path: 'publish',
          name: 'publish',
          component: typeSelect
        },
        {
          path: 'publish/apps',
          name: 'apps',
          component: apps
        },
        {
          path: 'publish/reward/add',
          name: 'reward',
          component: reward
        },
        {
          path: 'publish/project/add',
          name: 'projectAdd',
          component: projectAdd
        }
      ]
    },
    {
      path: '/project',
      name: 'project',
      component: project
    },
    {
      path: '/plan',
      name: 'plan',
      component: plan
    },
    {
      path: '/personalCenter',
      component: personalCenter
    },
    {
      path: '/worktable',
      name: 'worktable',
      component: worktable
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      children: [{
        path: 'forgetPass',
        name: 'forgetPass',
        component: forgetPass
      }]
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
