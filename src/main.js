// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'//引入store
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(Antd)//引用全部antd组件




/*
import {DatePicker,Table,Button,Rate,Menu,Layout,Icon,Breadcrumb} from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'
Vue.use(DatePicker)
Vue.use(Table)
Vue.use(Button)
Vue.use(Rate)
Vue.use(Menu)
Vue.use(Layout)
Vue.use(Icon)
Vue.use(Breadcrumb)
*/
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
