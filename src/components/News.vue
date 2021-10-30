<template>
  <div class="hello">
    <h1>新闻</h1>
    <!-- <router-link to="/news/0">体育</router-link> -->
    <router-link :to="'/news/' + id">娱乐</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '',
      id: '0'
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
