import Vue from 'vue'
import App from './App.vue'
import store from './stores'



new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
