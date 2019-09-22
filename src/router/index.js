import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Xd from '@/components/VueTest'
import test01 from '@/components/VueTest01'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: Xd,
      children:[
        {//三级路由
          path: '/test/test01',
          name: 'test01',
          component: test01
        }
      
      ]

    }
  ]
})
