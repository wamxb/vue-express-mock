// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

Vue.axios.get('http://localhost:7001/api/user', {
  params: {
    uid: 200
  }
}).then(({
  data
}) => {
  console.log('get success callback')
  console.log(data)
}, response => {
  console.log('error callback')
})


Vue.axios.post('http://localhost:7001/api/user', {
  uid: 100
}).then(({
  data
}) => {
  console.log('post success callback')
  console.log(data)
}, response => {
  console.log('error callback')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
