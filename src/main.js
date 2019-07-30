import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

import api from './config/api';

Vue.prototype.$http = api;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
