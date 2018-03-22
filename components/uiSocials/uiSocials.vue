<template lang="pug">

  .social__container.row.align-items-center.justify-content-center
    span.social__title(
      v-if="title"
      :class=`multiline
        ? 'social__title--multiline'
        : ''`
    )
      span(
        v-html="title"
        :class="`text-${color}`"
      )

    .social__list
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
