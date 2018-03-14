<template lang="pug">
  #app
    //- 
      uiHeader has
        props: 
          data - transmit data (locales, menu items ), 
          styles - transmit styles

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
        ui-btn(:styles="btnStyles" :data="btnData")

        a.btn.__small.disabled.__orang( href="#" v-html="")
        a.btn.__small( :href="`$(appLink)/signin`" v-html="")
        a.btn.__small.__border( :href="`$(appLink)/signup`" v-html="")

</template>

<script>
  import uiHeader from './components/uiHeader/uiHeader.vue'
  import uiBtn from './components/uiBtn/uiBtn.vue'
  import { mapState, mapGetters } from 'vuex';
  export default {
    name: 'app',
    data() {
      return {
      }
    },

    components: {
      uiHeader,
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


      btnStyles() {
        return {
          color: 'white',
          background: this.colors.science_blue,
          borderColor: 'white',
        }
      },

      btnData() {
        return {
          type: 'btn',
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
