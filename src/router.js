import Vue from 'vue';
import VueRouter from 'vue-router';
import Buy from './views/Buy.vue';
import Fees from './views/Fees.vue';
import Exchanges from './views/Exchanges.vue';
import Remittance from './views/Remittance.vue';
import Compare from './views/Compare.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Buy',
    component: Buy,
    meta: {
      title: 'Buy - USD Best Price',
      isInNavbar: true,
    },
  },
  {
    path: '/compare',
    name: 'Compare',
    component: Compare,
    meta: {
      title: 'Compare - USD Best Price',
      isInNavbar: true,
    },
  },
  {
    path: '/remittance',
    name: 'Remittance',
    component: Remittance,
    meta: {
      title: 'Remittance - USD Best Price',
      isInNavbar: true,
    },
  },
  {
    path: '/exchanges',
    name: 'Exchanges',
    component: Exchanges,
    meta: {
      title: 'Exchanges - USD Best Price',
      isInNavbar: true,
    },
  },
  {
    path: '/fees',
    name: "Exchanges' Fees",
    component: Fees,
    meta: {
      title: 'Fees - USD Best Price',
      isInNavbar: true,
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  }

  next();
});

export default router;
