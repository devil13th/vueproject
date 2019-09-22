// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {DatePicker,Table,Button,Rate,Menu} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(DatePicker)
Vue.use(Table)
Vue.use(Button)
Vue.use(Rate)
Vue.use(Menu)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})