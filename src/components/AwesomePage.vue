<template>
  <p>
    <slot />: An awesome page
  </p>
</template>

<script>
export default {
  name: 'AwesomePage',
};
</script>

<style lang="scss" scoped>
p {
  font-size: 3.5rem;
  margin: 0;
  color: $color-light-gray;
}
</style>
