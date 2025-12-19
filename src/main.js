// Hackers App v1.1.0 - Updated for enhanced performance
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import store from './store'

Vue.use(Buefy)

Vue.config.productionTip = false

console.log('Hackers App initializing...')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
