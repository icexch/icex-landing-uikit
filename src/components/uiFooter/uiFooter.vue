<template lang="pug">
  .container-fluid
    .row
      .col-8.bg-info.p-5
        .row.justify-content-between

          .col-auto
            .footer__logo
              img(:src="data.logo.url")
            .footer__email info@icex.ch

          .col-auto
            .footer__social
              ui-socials(
                color="primary"
                :multiline="true"
                :title="data.share.title"
              )

      .col-4.bg-primary.p-5
</template>

<script>
  import uiSocials from '../uiSocials/uiSocials.vue'
  
  export default {
    name: 'uiFooter',
    mixins: [],
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {};
    },
    components: {
      uiSocials,
    },
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
