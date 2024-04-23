import Router from 'vue-router'
import pageA from './pages/a.vue'
import pageB from './pages/b.vue'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: pageA,
    },
    {
      path: '/b',
      component: pageB,
    }
  ]
})