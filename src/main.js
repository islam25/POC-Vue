import Vue from 'vue'
import App from './App.vue'
import store from './store/index';
import router from './router/index';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
