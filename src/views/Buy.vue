<template>
  <div>
    <awesome-page>{{ name }}</awesome-page>
  </div>
</template>

<script>
import AwesomePageMixin from '@/mixins/awesome-page';

export default {
  name: 'Buy',
  mixins: [AwesomePageMixin],
};
</script>

<style lang="scss" scoped>

</style>
