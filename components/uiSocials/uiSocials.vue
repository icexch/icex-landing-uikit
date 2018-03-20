<template lang="pug">

  .social__container.row.align-items-center.justify-content-center
    span.social__title(
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
      },

      multiline: {
        type: Boolean,
        required: true,
      },

      title: {
        type: String,
        required: true,
      }
    },
    data() {
      return {
        socials: [
          {
            name: 'facebook',
            url: 'https://www.facebook.com/ICEX.CH/',
          },
          {
            name: 'vkontakte',
            url: 'https://vk.com/icexch',
          },
          {
            name: 'instagram',
            url: 'https://www.instagram.com/icex.ch/',
          },
          {
            name: 'telegram',
            url: 'https://t.me/icexch',
          },
          {
            name: 'twitter',
            url: 'https://twitter.com/icex_ch',
          },
        ],
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
