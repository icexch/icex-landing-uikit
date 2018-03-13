<template lang="pug">
  #app
    uiHeader(
      :locale="locale"
      :header="header"
    )

</template>

<script>
  import uiHeader from './components/uiHeader/uiHeader.vue'
  import { mapState, mapGetters } from 'vuex';
  export default {
    name: 'app',
    data() {
      return {
      }
    },
    components: {
      uiHeader,
    },

    computed: {
      ...mapState({
        colors: state => state.glossary.colors
      }),

      ...mapGetters({
        locale: 'locale'
      }),

      header() {
        return {
          logo: {
            url: 'img/logo.svg',
          },

          burger: {
            bg: this.colors.tangaroa,
            line: {
              default: this.colors.science_blue,
              active: 'white'
            }
          },

          bg: this.colors.pomegranate
        }
      }
    }
  };
</script>

<style lang="sass">
  
</style>
