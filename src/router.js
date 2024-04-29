import Router from 'vue-router'
import pageA from './pages/a.vue'
import pageB from './pages/b.vue'
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/a',
      component: pageA,
    },
    {
      path: '/',
      component: pageB,
    }
  ]
})