<template>
  <div id="app">
    <HelloWorld/>
    <todolist ssf="1" class="t" post-title="testprops" v-model="clickCount">Something bad happened.</todolist>
    {{ clickCount }}
    <DefineComp>
      <template v-slot:header>
        header
      </template>
      <template v-slot:content>
        content
      </template>
    </DefineComp>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

var DefineComp = {
  data: function(){
    return {
      title: 'DefineComp1'
    }
  },
  template: '<div>{{ title }}<slot name="header"></slot><slot name="content"></slot></div>'
}

export default {
  name: 'App',
  components: {
    HelloWorld,
    DefineComp
  },
  data: function() {
    return {
      clickCount: 0
    }
  },
  methods: {
    event: function(e) {
      console.log(e)
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
