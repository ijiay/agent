// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import FastClick from 'fastclick'
// import VueRouter from 'vue-router'
import App from './App'
// import Home from './components/HelloFromVux'
import router from './router'
import store from './store'
import $http from './http'
import api from './api'

// Vue.use(VueRouter)

// const routes = [{
//   path: '/',
//   component: Home
// }]
//
// const router = new VueRouter({
//   routes
// })

// FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$http = $http
Vue.prototype.api = api

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
