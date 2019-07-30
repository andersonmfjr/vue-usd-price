<template>
  <nav class="nav">
    <div class="nav__container">
      <logo />
      <div>
        <the-navbar-list />
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from './Logo.vue';
import TheNavbarList from './TheNavbarList.vue';

export default {
  name: 'TheNavbar',
  components: {
    Logo,
    TheNavbarList,
  },
};
</script>

<style lang="scss" scoped>
$navbar-height: 60px;
$container-width: 880px;

.nav {
  height: $navbar-height;
  width: 100%;
  background-color: $color-primary;
  display: flex;
  align-items: center;
  justify-content: center;

  &__container {
    max-width: $container-width;
    width: 100%;
    height: 100%;
    margin: 0 10px 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
