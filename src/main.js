import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routers from './routers'


Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: routers,
  base: '/'
})

const vue = new Vue({
  router,
  render: h => h(App)
})
vue.$mount('#app')