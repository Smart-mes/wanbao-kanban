import Vue from 'vue'
import api from '@/api/index'
import Head from '@/components/Head/Head.vue'
import Chart from '@/components/Chart/index.vue'
import Container from '@/components/Container.vue'
import Table from '@/components/Table.vue'
import Box from '@/components/Box.vue'
import HeadOne from '@/components/Head/HeadOne.vue'
import HeadSeven from '@/components/Head/HeadSeven.vue'
import Icon from '@/components/Icon/index.vue'

Object.defineProperty(Vue.prototype, '$api', {
  value: api,
  writable: false,
})

Vue.component(Chart.name, Chart)
Vue.component(Table.name, Table)
Vue.component(Head.name, Head)
Vue.component(HeadOne.name, HeadOne)
Vue.component(HeadSeven.name, HeadSeven)
Vue.component('Box', Box)
Vue.component('Container', Container)
Vue.component('icon', Icon)
