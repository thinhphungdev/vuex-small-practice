import Vue from 'vue'
import App from './App.vue'
import {store} from "./store/store"

Vue.config.productionTip = false

new Vue({
  store: store,
  el: '#app',
  render: h => h(App)
});
