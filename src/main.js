import Vue from 'vue'

import App from '@/App.vue'
import router from '@/router'
import api from '@/api'
import Chart from '@/components/Chart/index.vue'
import '@/mock'

Vue.component(Chart.name, Chart)
Object.defineProperty(Vue.prototype, '$api', {
  value: api,
  writable: false,
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
