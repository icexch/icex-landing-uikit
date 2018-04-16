<template lang="pug">

  no-ssr
    flickity(ref="flickity", :options="flickityOptions")
      slot(name="sliderContent")

</template>

<script>
  export default {

    name: 'uiSlider',

    props: {
      flickityOptions: {
        type: Object,
        required: false,
        default() {
          return {}
        }
      },
    },

    data () {
      return {
        sliderList: {},
      }
    },

    components: {
    },

  }
</script>

<style lang="sass" scoped>
  // @import "./uiSlider.sass";
</style>