import AwesomePage from '@/components/AwesomePage.vue';

const awesomeMixin = {
  components: {
    AwesomePage,
  },
  computed: {
    name() {
      return this.$route.name;
    },
  },
};

export default awesomeMixin;
