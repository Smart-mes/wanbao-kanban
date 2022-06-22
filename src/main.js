import Vue from 'vue'

import App from '@/App.vue'
import router from '@/router'
import api from '@/api'
import Chart from '@/components/Chart/index.vue'
import Head from '@/components/Head/Head.vue'
import Container from '@/components/Container.vue'
import Table from '@/components/Table.vue'
import Box from '@/components/Box.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/mock'

Vue.use(ElementUI)

Vue.component(Chart.name, Chart)
Vue.component(Table.name, Table)
Vue.component(Head.name, Head)
Vue.component('Box', Box)
Vue.component('Container', Container)

Object.defineProperty(Vue.prototype, '$api', {
  value: api,
  writable: false,
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
