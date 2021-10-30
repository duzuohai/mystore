<template>
  <div class="hello">
    传递的新闻ID是：{{ $route.params.id }}
    <h1>{{ arr[$route.params.id] }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '',
      arr: ['新闻一', '新闻二']
    }
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
