import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RouterParent from '@/components/routertest/RouterParent'
import RouterChild from '@/components/routertest/RouterChild'
import StateTest from '@/components/statetest/StateStore'
import FormTest from '@/components/formtest/FormTest'
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
      children:[
        {//三级路由
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
      path: '/FormTest',
      name: 'FormTest',
      component: FormTest
    },

    

    
  ]
})
