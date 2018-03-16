<template lang="pug">
  #app
    ui-section(:data="section1Data")
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
          @clickbtn="emitBtnClick"
        )
          template(slot="headerContent")
            span Header content here

          .header__btns(slot="headerBtns")
            ui-link(type="link" text="Sign in" :link="`${appLink}/signin`")
            ui-link(type="primary-outline" text="Sign up" :link="`${appLink}/signup`" @clickbtn="emitBtnClick")
            //- ui-btn(type="outline-primary" text="Primary btn text")

    ui-section(:data="section2Data")
      div(slot="sectionContent")


    ui-footer(:data="footerData")
      div(slot="footerForm")


</template>

<script>
  import uiSection from './components/uiSection/uiSection.vue'
  import uiHeader from './components/uiHeader/uiHeader.vue'
  import uiBtn from './components/uiBtn/uiBtn.vue'
  import uiLink from './components/uiLink/uiLink.vue'
  import uiFooter from './components/uiFooter/uiFooter.vue'

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
      uiFooter,
    },

    computed: {
      ...mapState({
        colors: state => state.glossary.colors
      }),

      ...mapGetters({
        // return locale list and active locale
        locale: 'locale'
      }),

      section1Data() {
        return {
          label: {
            text: '',
            classes: ['text-warning', 'h4'],
          },
          container: {
            classes: ['bg-info', 'section__cotnainer--fullheight'],
          }
        }
      },
      section2Data() {
        return {
          label: {
            text: 'Next label text',
            classes: ['text-info'],
          },
          container: {
            classes: ['bg-bug', 'section__cotnainer--fullheight','bg-dark', 'pt-5', 'pb-5'],
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
            title: 'Follow us',
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

      footerData() {
        return {
          logo: {
            url: 'img/logo_footer.svg',
          },
          share: {
            // chage with $t('header.share')
            title: 'Follow us',
          },
        }
      },

      appLink() {
        return `https://app.icex.ch/${this.locale.active}/auth`
      }
    },

    methods: {
      emitBtnClick() {
      }
    }
  };
</script>

<style lang="sass">

  $font-family-base: 'Montserrat'
  $primary: #021032
  $secondary: #0b50cd
  $info: #e7e9f1

  // $header-burger-bg: red !global
  // $header-burger-color: white !global

  @import "~bootstrap/scss/bootstrap";
  @import "./components/uiHeader/uiHeader.sass";
  @import "./components/uiSection/uiSection.sass";
  @import "./components/uiSocials/uiSocials.sass";
  @import "./components/uiForm/uiForm.sass";



</style>
