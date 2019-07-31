<template>
  <div>
    <p class="subheader__item">
      Compare and find realtime best effective prices in Brazil's top USD Exchanges,
      considering fees.
    </p>
    <p>
      <v-button
        shape="secondary"
        size="xs"
      >
        Click on the exchange now
      </v-button>
      <span class="subheader__item"> to view operation details.</span>
    </p>
  </div>
</template>

<script>
import VButton from './VButton.vue';

export default {
  name: 'SubHeader',
  components: {
    VButton,
  },
};
</script>

<style lang="scss" scoped>
.subheader__item {
  font-size: 1.5rem;
  color: $color-dark-gray;
}
</style>
