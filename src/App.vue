<template lang="pug">
  #app
    uiSection(:data="sectionData")
      div(slot="sectionContent")
        //- 
          uiHeader has
            props: 
              data - transmit data (locales, menu items ), 

            slots 
              headerBtns - signin signup btn 
              headerContent - coins slider or something else

        ui-header(
          :data="headerData"
          :styles="headerStyle"
          @clickbtn="emitBtnClick"
        )
          .header__content(slot="headerContent")
            span Header content here

          .header__btns(slot="headerBtns")
            ui-link(type="link" text="Link text" link="#")
            ui-link(type="primary-outline" text="Primary link text" link="#" clickbtn="emitBtnClick")
            //- ui-btn(type="outline-primary" text="Primary btn text")


</template>

<script>
  import uiSection from './components/uiSection/uiSection.vue'
  import uiHeader from './components/uiHeader/uiHeader.vue'
  import uiBtn from './components/uiBtn/uiBtn.vue'
  import uiLink from './components/uiLink/uiLink.vue'

  import { mapState, mapGetters } from 'vuex';
  export default {
    name: 'app',

    data() {
      return {
      }
    },

    components: {
      uiSection,
      uiHeader,
      uiLink,
      uiBtn,
    },

    computed: {
      ...mapState({
        colors: state => state.glossary.colors
      }),

      ...mapGetters({
        // return locale list and active locale
        locale: 'locale'
      }),

      sectionData() {
        return {
          label: 'Menu item 1',
        }
      },

      headerStyle() {
        return {
          burger: {
            bg: this.colors.tangaroa,
            line: {
              default: this.colors.science_blue,
              active: 'white'
            },
          },
          locale: {
            bg: this.colors.science_blue,
            color: 'white',
          },
          header: {
            bg: this.colors.athens_gray_light,
            bgFixed: this.colors.tangaroa + ' url(img/bg_header.svg) center center no-repeat'
          }
        }
      },

      headerData() {
        return {
          locale: this.locale,
          logo: {
            url: 'img/logo.svg',
          },
          share: {
            // chage with $t('header.share')
            title: 'Follow us'
          },
          menu: [
            'Menu item 1',
            'Menu item 2',
            'Menu item 3',
            'Menu item 4',
            'Menu item 5',
          ]
        }
      },

      btnData() {
        return {
          type: 'primary',
          text: 'Btn text',
        }
      },

      appLink() {
        return `https://app.icex.ch/${locale.active}/auth`
      }
    },

    methods: {
      emitBtnClick() {
        console.log('click emit btn');
      }
    }
  };
</script>

<style lang="sass">

  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  @import "~bootstrap/scss/mixins";
  @import "~bootstrap/scss/grid";

</style>
