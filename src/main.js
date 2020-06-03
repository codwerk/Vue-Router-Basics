import Vue from 'vue'
import App from './App.vue'
//importation de vueRouter
import vueRouter from 'vue-router'

Vue.use(vueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
