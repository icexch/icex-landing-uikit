<template lang="pug">
  .container-fluid
    .row.align-items-stretch
      .col-12.col-lg-8.order-md-2.order-lg-1.bg-info.p-4.pl-5.pb-5
        .row.justify-content-between.h-100
          .col-auto
            .footer__logo.mb-4
              img(
                :src="footerData.logo.url"
                :alt="footerData.logo.alt"
              )
            .footer__email(v-html="footerData.email")

          .col-auto
            .footer__social.d-flex
              ui-socials(
                color="primary"
                :multiline="true"
                :title="footerData.share.title"
                :socials="socials"
              )
        .h6.mb-auto
          small.text-muted(v-html="footerData.copyright")

      .col-12.col-lg-4.order-md-1.order-lg-2.p-4(:class="footerData.form.class")
        slot(name="footerForm")

</template>

<script>
  import uiSocials from '../uiSocials/uiSocials.vue'

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
