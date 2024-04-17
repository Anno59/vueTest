// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Vue.components('todo-item', {
//   template: '<li>test</li>'
// })


/* eslint-disable no-new */
window.a = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  data:{
    a: 1
  },
  created: function(){
    console.log('a is: ' + this.a)
  }
})
