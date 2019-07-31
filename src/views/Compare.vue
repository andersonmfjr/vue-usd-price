<template>
  <div>
    <the-header>USD Best Price in Brazil</the-header>
    <sub-header />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import TheHeader from '@/components/TheHeader.vue';
import SubHeader from '@/components/SubHeader.vue';

export default {
  name: 'Compare',
  components: {
    TheHeader,
    SubHeader,
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
