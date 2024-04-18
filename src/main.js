// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.component('todolist', {
  inheritAttrs: false,
  props: {
    'postTitle': String,
    'value': {
      type: Number,
      default: 100
    },
  },
  data: function() {
    return {
      count: 0
    }
  },
  template: '<div class="a" :title="postTitle"><input class="a1"  @input="$emit(`input`, $event.target.value)" :value="value"></input><slot></slot>{{value}}</div>'
})


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
