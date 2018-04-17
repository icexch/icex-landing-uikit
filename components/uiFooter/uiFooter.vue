<template lang="pug">
  .container-fluid
    .row.align-items-stretch
      .col-12.col-lg-8.order-2.order-lg-1.p-4.pl-lg-5.pb-lg-5(:class="footerData.class")
        .row.justify-content-center.justify-content-sm-between.h-100
          .col-12.col-sm-auto.text-sm-left.text-center.mb-4.mb-sm-0
            .footer__logo.mb-4
              slot(name="footerLogo")
            .mb-2.text-muted(v-html="footerData.emailTitle")
            a(:href="`mailto:${footerData.email}`" v-html="footerData.email").footer__email

          .col-12.col-sm-auto
            .footer__social.d-flex.justify-content-center.justify-content-sm-right
              ui-socials(
                :color="footerData.share.color"
                :multiline="true"
                :title="footerData.share.title"
                :socials="socials"
              )
        .h6.mb-auto.text-center.text-lg-left
          small.text-muted(v-html="footerData.copyright")

      .col-12.col-lg-4.order-1.order-lg-2.p-4(:class="footerData.form.class")
        slot(name="footerForm")

</template>

<script>
  import uiSocials from '../uiSocials/uiSocials.vue';

  export default {
    name: 'ui-footer',
    props: {
      footerData: {
        type: Object,
        required: true,
      },
      socials: {
        type: Array,
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
      uiSocials,
    },
  };
</script>
