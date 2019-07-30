<template>
  <button
    :class="style"
    @click="$emit('click') "
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    shape: {
      type: String,
      required: true,
      validator: value => ['primary', 'secondary'].indexOf(value) !== -1,
    },
    size: {
      type: String,
      required: true,
      validator: value => ['md', 'lg'].indexOf(value) !== -1,
    },
  },
  computed: {
    style() {
      return `${this.shape} ${this.size}`;
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border-radius: $base-radius;
  padding: $base-padding;
  outline: none;
  cursor: pointer;
}

.primary {
  background-color: transparent;
  color: $color-white;
  border: 2px solid $color-white;
  padding-left: $base-padding * 2;
  padding-right: $base-padding * 2;
  font-weight: bold;
}

.secondary {
  background-color: $color-light-gray;
  border: 1px solid #BEBEBE;
  color: $color-dark-gray;
}

.md {
  font-size: 1.6rem;
}

.lg {
  font-size: 1.8rem;
}
</style>
