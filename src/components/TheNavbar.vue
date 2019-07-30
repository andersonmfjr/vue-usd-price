<template>
  <nav class="nav">
    <div class="nav__container">
      <logo />
      <div class="nav__actions">
        <the-navbar-list />
        <v-button
          shape="primary"
          size="md"
        >
          Login
        </v-button>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from './Logo.vue';
import TheNavbarList from './TheNavbarList.vue';
import VButton from './VButton.vue';

export default {
  name: 'TheNavbar',
  components: {
    Logo,
    TheNavbarList,
    VButton,
  },
};
</script>

<style lang="scss" scoped>
$navbar-height: 80px;
$container-width: 920px;

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

  &__container {
    display: flex;
    flex-direction: row;
  }
}
</style>
