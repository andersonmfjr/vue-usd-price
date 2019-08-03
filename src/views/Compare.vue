<template>
  <div>
    <the-header>USD Best Price in Brazil</the-header>
    <sub-header />
    <div v-if="fetching">
      <loading />
    </div>

    <div
      v-if="!fetching && fetchSuccess"
      class="inputs__container"
    >
      <v-input
        currency="usd"
        @value-changed="handleUSD"
      />
      <v-input
        currency="brl"
        :disabled="true"
      />
    </div>

    <div v-if="!fetching && fetchError">
      <error />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
import { UPDATE_BRL } from '@/store/currency/types';
import TheHeader from '@/components/TheHeader.vue';
import SubHeader from '@/components/SubHeader.vue';
import VInput from '@/components/VInput.vue';
import Loading from '@/components/Loading.vue';
import Error from '@/components/Error.vue';

export default {
  name: 'Compare',
  components: {
    TheHeader,
    SubHeader,
    Loading,
    VInput,
    Error,
  },
  computed: mapState({
    fetching: state => state.currency.fetching,
    fetchSuccess: state => state.currency.fetchSuccess,
    fetchError: state => state.currency.fetchError,
  }),
  async created() {
    await this.fetchBID();
  },
  methods: {
    ...mapActions({
      fetchBID: 'currency/fetchBID',
    }),
    ...mapMutations({
      updateBRL: `currency/${UPDATE_BRL}`,
    }),
    handleUSD(value) {
      this.updateBRL(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.inputs__container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: $base-margin;
}
</style>
