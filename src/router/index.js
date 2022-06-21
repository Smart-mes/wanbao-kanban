import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const pages = import.meta.glob('../pages/*.vue')
const routes = Object.entries(pages).map(([key, page]) => ({
  name: key.split('/').pop().slice(0, -4),
  path: `/${key.slice(9, -4)}`,
  component: page,
}))

export default new Router({
  routes: [
    ...routes,
    {
      path: '/',
      redirect: '/Home',
    },
  ],
})
