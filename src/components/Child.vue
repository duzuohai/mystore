<template>
  <div id="box">
    <h2>child子组件部分</h2>
    <!-- <h1>{{ message }}</h1> -->
    <button @click="sendMessage">sendMessage</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'hello'
    }
  },
  props: ['message'],
  methods: {
    sendMessage: function () {
      this.$emit('change', this.msg)
    }
  }
}
</script>
<style scoped>
</style>
