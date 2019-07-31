import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

import api from './config/api';
import store from './store/index';

Vue.prototype.$http = api;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
