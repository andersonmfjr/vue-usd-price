<template functional>
  <div class="logo__container">
    <p class="logo__item_usd">
      USD
    </p>
    <p class="logo__item_name">
      Best Price
    </p>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  &__container {
    color: $color-white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  &__item_usd {
    font-size: 1.5rem;
    transform: rotate(-90deg);
    font-weight: bold;
  }

  &__item_name {
    font-size: 2.6rem;
    margin: 0;
  }
}
</style>
