<template>
  <p class="header">
    <slot />
  </p>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style lang="scss" scoped>
.header {
  font-size: 5rem;
  color: $color-secondary;
}
</style>
