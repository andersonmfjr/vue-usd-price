<template>
  <div class="input__wrapper">
    <input
      v-model.lazy="price"
      v-money="money"
      class="input__content"
      @change="handleChange"
    >
    <div class="input__currency">
      {{ currency | uppercase }}
    </div>
  </div>
</template>

<script>
import { VMoney } from 'v-money';

export default {
  name: 'VInput',
  filters: {
    uppercase(value) {
      if (!value) {
        return '';
      }

      return value.toString().toUpperCase();
    },
  },
  directives: {
    money: VMoney,
  },
  props: {
    currency: {
      type: String,
      required: false,
      default: 'brl',
      validator: value => ['brl', 'usd'].indexOf(value) !== -1,
    },
  },
  data() {
    return {
      money: {
        decimal: ',',
        thousands: '.',
        prefix: '',
        suffix: '',
        precision: 2,
        masked: false,
      },
    };
  },
  computed: {
    price() {
      return this.$store.state.currency[this.currency];
    },
  },
  mounted() {
    if (this.currency.toLowerCase() === 'usd') {
      this.money.decimal = '.';
      this.money.thousands = ',';
    }
  },
  methods: {
    handleChange(e) {
      this.$emit('value-changed', e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
$base-height: 50px;

.input {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 200px;
    height: $base-height;
    border-radius: $base-radius;
    border: 2px solid $color-lighter;
  }

  &__content {
    padding: $base-padding;
    border: none;
    margin-right: 10px;
    width: 60%;
    text-align: right;
    color: $color-dark-gray;
    font-weight: bold;

    &:focus {
      outline: none;
    }
  }

  &__currency {
    margin: 0;
    font-size: 1.6rem;
    font-weight: bold;
    color: $color-secondary;
    padding-left: 10px;
    border-left: 2px solid $color-lighter;
  }
}
</style>
