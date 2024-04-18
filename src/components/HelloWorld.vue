<template>
  <div class="hello">
    <h1
      :title="`id${msg.split('').reverse().join('')}`"
      v-if="show"
      v-for="todo in todos"
      @[click]="handleClick"
      class="dd"
      :class="message"
    >
      {{ foo }}{{ todo.text }}{{ message }}
    </h1>
    <input id="John" type="checkbox" value="John" v-model="message" />
    <textarea name="" id="" cols="30" rows="10" v-model="textarea"></textarea>
    <input type="radio" v-model="picked" :value="a">
    <input v-model.lazy="msg">
  </div>
</template>

<script>
let a = {
  msg: "Welcome to Your Vue.js App",
  show: true,
  todos: [{ text: 1 }, { text: 2 }, { text: 3 }],
  message: [],
  rawHtml: `<h1>222</h1>`,
  click: "click",
  textarea: "textarea",
  picked: '',
  a: [1]
};

// Object.freeze(a)
export default {
  name: "HelloWorld",
  data() {
    return a;
  },
  methods: {
    handleClick: function () {
      console.log(1);
    },
  },
  created: function () {
    console.log("a is: " + this.a);
  },
  computed: {
    foo: {
      get: function () {
        return this.msg.split("").reverse().join("");
      },
      set: function (newValue) {
        console.log(2222)
        console.log(newValue)
        this.msg = 'Welcome'
      },
    },
  },
  // watch: {
  //   message: function(new, old){
  //     console.log(new, old)
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
