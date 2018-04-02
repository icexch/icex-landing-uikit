<template lang="pug">

  .social__container(:class=`multiline
    ? 'social__container--multiline'
    : ''`)
    .social__title.mb-3(v-if="title")
      span(
        v-html="title"
        :class="`text-${color}`"
      )

    .social__list.mb-3
      a(
        target="_blank"
        v-for="social in socials"
        :href="social.url"
        :class="[`socicon-${social.name}`, `text-${color}`]"
      ).h1

</template>

<script>
  export default {
    name: 'uiSocials',
    mixins: [],
    props: {
      color: {
        type: String,
        required: true,
        default: 'white',
      },

      multiline: {
        type: Boolean,
        required: false,
        default: false,
      },

      title: {
        type: String,
        required: false,
      },

      socials: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
      };
    },
    components: {},
    watch: {},
    methods: {},
    computed: {},
    fetch() {},
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    activated() {},
    deactivated() {},
    beforeDestroy() {},
    destroyed() {},
    errorCaptured() {},
  };
</script>

<style lang="sass">

</style>
