<template>
  <div>
    <the-header>USD Best Price in Brazil</the-header>
    <sub-header />
    <div v-if="fetching">
      <loading />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import TheHeader from '@/components/TheHeader.vue';
import SubHeader from '@/components/SubHeader.vue';
import Loading from '@/components/Loading.vue';

export default {
  name: 'Compare',
  components: {
    TheHeader,
    SubHeader,
    Loading,
  },
  computed: mapState({
    fetching: state => state.currency.fetching,
    fetchSucess: state => state.currency.fetchSucess,
    fetchError: state => state.currency.fetchError,
  }),
  async created() {
    await this.fetchBID();
  },
  methods: {
    ...mapActions({
      fetchBID: 'currency/fetchBID',
    }),
  },
};
</script>

<style lang="scss" scoped>

</style>
