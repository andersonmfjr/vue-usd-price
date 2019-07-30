<template>
  <div>
    <awesome-page>{{ name }}</awesome-page>
  </div>
</template>

<script>
import AwesomePageMixin from '@/mixins/awesome-page';

export default {
  name: 'Remittance',
  mixins: [AwesomePageMixin],
};
</script>

<style lang="scss" scoped>

</style>
