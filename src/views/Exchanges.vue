<template>
  <div>
    <awesome-page>{{ name }}</awesome-page>
  </div>
</template>

<script>
import AwesomePageMixin from '@/mixins/awesome-page';

export default {
  name: 'Exchanges',
  mixins: [AwesomePageMixin],
};
</script>

<style lang="scss" scoped>

</style>
