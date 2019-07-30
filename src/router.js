import Vue from 'vue';
import Router from 'vue-router';
import Buy from './views/Buy.vue';
import Fees from './views/Fees.vue';
import Exchanges from './views/Exchanges.vue';
import Remittance from './views/Remittance.vue';
import Compare from './views/Compare.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Buy',
      component: Buy,
    },
    {
      path: '/compare',
      name: 'Compare',
      component: Compare,
    },
    {
      path: '/remittance',
      name: 'Remittance',
      component: Remittance,
    },
    {
      path: '/exchanges',
      name: 'Exchanges',
      component: Exchanges,
    },
    {
      path: '/fees',
      name: "Exchanges' Fees",
      component: Fees,
    },
  ],
});
