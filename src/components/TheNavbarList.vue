<template>
  <ul>
    <the-navbar-list-item
      v-for="route in routes"
      :key="route.path"
      :name="route.name"
      :path="route.path"
    />
  </ul>
</template>

<script>
import TheNavbarListItem from './TheNavbarListItem.vue';

export default {
  name: 'TheNavbarList',
  components: {
    TheNavbarListItem,
  },
  computed: {
    routes() {
      const routes = this.$router.options.routes
        .filter(r => !!r.meta.isInNavbar)
        .map(r => ({ name: r.name, path: r.path }));

      return routes;
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  display: inline;
}
</style>
