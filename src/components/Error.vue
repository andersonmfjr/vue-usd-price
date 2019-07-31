<template>
  <p class="loading">
    Something went wrong. Sorry :(
  </p>
</template>

<script>
export default {
  name: 'Error',
};
</script>

<style lang="scss" scoped>
.loading {
  margin-top: $base-margin;
  color: $color-light-gray;
  font-size: 1.6rem;
  color: #ff5858;
}
</style>
