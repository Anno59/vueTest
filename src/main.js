import Vue from 'vue/dist/vue.esm.js'
// import router from './router'
// import store from './store'
Vue.config.productionTip = false

import App from "./App"

Vue.component('heading', {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  render: function(h){
    console.log(this.$slots.default)
    return h('h'+this.text, this.$slots.default)
  }
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
})
