<template lang="pug">

  ul.slider__container(:class="showSlider ? 'visible' : 'invisible'")
    slick(ref="slickHeader" :options="sliderOptions")
      slot(name="slides")

</template>

<script>
  import Slick from 'vue-slick'

  export default {

    name: 'uiSlider',

    props: {
      sliderOptions: {
        type: Object,
        required: true,
      },
      showSlider: {
        type: Boolean,
        required: true,
        default: false,
      },
    },

    data () {
      return {
        sliderList: {},
        
      }
    },

    components: {
      Slick,
    },

    // mounted () {
    //   this.$refs.slickHeader.destroy();
    // },

  }
</script>
