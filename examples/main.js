import Vue from 'vue'
import App from './App.vue'

import JwUI from '../packages'
Vue.use(JwUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
