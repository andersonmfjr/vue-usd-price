<template>
  <div id="app">
    <the-navbar />
    <div class="router__container">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';

export default {
  name: 'App',
  components: {
    TheNavbar,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

html {
  font-size: 10px;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Roboto', sans-serif;
}

.router__container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: $base-margin;
  height: 100%;

  div {
    margin-left: $base-margin / 2;
    margin-right: $base-margin / 2;
  }
}
</style>
