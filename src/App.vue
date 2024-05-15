<template>
<div id="app">
  <heading :text="`2`">111</heading>
</div>
</template>

<script>
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import './components/n'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      ages: 184
    }
  },
  methods: {
    msg: function (ag) {
      this.ages++
      window.console.log(ag)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
