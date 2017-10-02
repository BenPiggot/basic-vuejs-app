import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'

import store from './store/store'
import { routes } from './routes'

Vue.use(VueRouter)

Vue.filter('currency', function(value) {
  return '$' + value.toLocaleString();
})

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
