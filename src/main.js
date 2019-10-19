import Vue from 'vue'
import App from './App.vue'
import 'vue-swatches/dist/vue-swatches.min.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
