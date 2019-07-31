<template functional>
  <transition>
    <li>
      <router-link :to="props.path">
        {{ props.name }}
      </router-link>
    </li>
  </transition>
</template>

<style lang="scss" scoped>
li {
  list-style: none;
  display: inline;
  margin-right: $base-margin / 4;

  &:last-of-type {
    margin-right: $base-margin;
  }

  a {
    text-decoration: none;
    color: $color-white;
    font-size: 1.5rem;
    padding: 0 5px 0 5px;

    &.router-link-exact-active {
      font-weight: bold;
      padding-bottom: $base-padding;
      border-bottom: 2px solid $color-white;
    }
  }
}
</style>
