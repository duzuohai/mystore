<template>
  <div class="hello">
    <!-- <input type="text" v-model="msg" @keypress.enter="enter" /> -->
    <!-- <h1>{{ upper }}</h1> -->
    <child :message="msg" @change="getval"></child>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
// 1、ES6语法导入子组件
import child from './Child'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '你好子组件'
    }
  },
  computed: {
    upper () {
      return this.msg.toUpperCase()
    }
  },
  methods: {
    enter () {
      alert(this.msg)
    },
    getval: function (val) {
      this.msg = val
    }
  },
  components: {
    child
  }
}
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
