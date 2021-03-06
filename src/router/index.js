import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RouterParent from '@/components/routertest/RouterParent'
import RouterChild from '@/components/routertest/RouterChild'
import StateTest from '@/components/statetest/StateStore'
import FormTest from '@/components/formtest/FormTest'
import Cpmt03 from '@/components/statetest/Cpmt03'
import VuexTest from '@/components/vuextest/VuexTest'
import AuditList from '@/components/formtest/AuditList'
import JsxTest from '@/components/jsxtest/jsx'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/RouterParent',
      name: 'RouterParent',
      component: RouterParent,
      children: [
        {// 三级路由
          path: '/RouterParent/RouterChild',
          name: 'RouterChild',
          component: RouterChild
        }
      ]
    },
    {
      path: '/StateTest',
      name: 'StateTest',
      component: StateTest
    },
    {
      path: '/StateTest/Cpmt03',
      name: 'Cpmt03',
      component: Cpmt03
    },

    {
      path: '/FormTest',
      name: 'FormTest',
      component: FormTest
    },
    {
      path: '/AuditList',
      name: 'AuditList',
      component: AuditList
    },

    {
      path: '/vuextest',
      name: 'VuexTest',
      component: VuexTest
    },
    {
      path: '/jsxtest',
      name: 'JSXtest',
      component: JsxTest
    }
  ]
})
