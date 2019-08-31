// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from './router'
import './cs.css'
import axios from '@/api/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import '@/permission'
import '@/icons' // icon
import '@/styles/index.scss'
Vue.use(ElementUI)

Vue.prototype.$axios = axios

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
