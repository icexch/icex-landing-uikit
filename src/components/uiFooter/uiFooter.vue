<template lang="pug">
  .container-fluid
    .row.align-items-stretch
      .col-8.bg-info.p-4.pl-5.pb-5
        .row.justify-content-between.h-100
          .col-auto
            .footer__logo.mb-4
              img(:src="data.logo.url")
            .footer__email info@icex.ch

          .col-auto
            .footer__social.d-flex
              ui-socials(
                color="primary"
                :multiline="true"
                :title="data.share.title"
              )
        .h6.mb-auto
          small.text-muted © 2017 ICEX | Holygate Investments

      .col-4.bg-primary.p-4
        ui-form(:data="formData")
</template>

<script>
  import uiSocials from '../uiSocials/uiSocials.vue'
  import uiForm from '../uiForm/uiForm.vue'
  
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
      return {
        formData: {
          placeholder: {
            name: 'Name',
            email: 'Email',
            msg: 'Message',
          },
        },
      };
    },
    components: {
      uiForm,
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
