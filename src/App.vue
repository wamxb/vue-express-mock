<template>
  <div id="app">
    <hello></hello>
    <p>{{msg}}</p>
    <p>{{user}}</p>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  },
  data(){
    return {
      msg: '',
      user: ''
    }
  },
  created() {
    this.$http.get('http://localhost:7001/api/test-demo').then(({data}) => {
      console.log(data)
      this.msg = data
    })
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
