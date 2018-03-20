<template lang="pug">

  .header__container(:class="{ 'header__container--fixed': showMenu }")
    .container-fluid

      .header__info.row(:class="{ 'header__info--sticked' : stickNav }")
        .header__burger-wrap.col-auto

          .header__burger-menu(
            @click="toggleMenu"
            :class="{ 'header__burger-menu--open' : showMenu }"
          )
            span(v-for="i in 4")

        .header__logo.col-auto
          img(
            alt=""
            :src="headerData.logo.url"
          )

        .header__content.col-auto(v-if="!showMenu")
          slot(name="headerContent")

      .header__nav.row.justify-content-between
        //- .header__locale-container()
        .header__locale-container(v-click-outside="closeLocaleList")
          .header__locale-wrap( :class="{ 'header__locale-wrap--active' : showLocales }")

            ul.header__locale-list.list-unstyled(v-show="showLocales")

              li.header__locale-list-item(
                v-for="(val, key) in headerData.locale.list"
                :class="{active: key === headerData.locale.active}"
              )
                a(
                  v-html="val.full"
                  :href="`/${key}/`"
                )

          .header__locale(:class="{'header__locale--active': showLocales}")

            .header__locale-selected.text-white(
              :class="{ active: showLocales }"
              v-html="headerData.locale.list[headerData.locale.active].short"
              @click="toggleLocales($event)"
            )

        template(v-if="!showMenu")
          slot(name="headerBtns")


    template(v-if="showMenu")
      .header__logo.header__logo--mobile
        img(
          alt=""
          :src="headerData.logo.url"
        )

      ul.header__menu.list-unstyled
        li.header__menu-nav.h5(v-for="(nav, index) in headerData.menu", @click="scrollTo(index, true, -70)")
          a(:href="`#section{index}`") {{ nav }}

      .header__share
        ui-socials(
          color="white"
          :multiline="false"
          :title="headerData.share.title"
        )

    //- .scroller(:style="{ 'visibility' : stickNav ? 'visible' : 'hidden' }", @click="scrollTo(1, false, 0)")

</template>

<script>
  // import vClickOutside from 'v-click-outside'
  import uiSocials from '../uiSocials/uiSocials.vue'

  export default {
    name: 'LayoutHeader',

    props: {
      headerData: {
        type: Object,
        required: true,
      },
    },

    data () {
      return {
        showLocales: false,
        showMenu: false,
        stickNav: false
      }
    },
    components: {
      uiSocials,
    },

    directives: {
      // clickOutside: vClickOutside.directive
    },

    methods: {
      /*
      show || hide locale list
       */
      toggleLocales () {
        this.showLocales = !this.showLocales
      },
      /*
      hide locale list
       */
      closeLocaleList () {
        this.showLocales = false
      },
      /*
      show || hide menu and disable scroll under menu
       */
      toggleMenu () {
        this.showMenu = !this.showMenu

        document.documentElement.style.overflow = this.showMenu
          ? 'hidden'
          : 'initial'
      },

      /**
       * Scroll to section
       * @param  {Number} sec - Section id 
       * @param  {Boolean} toggleMenu - hide menu after scoll to section if true
       * @param  {Number} - offset before section
       */
      scrollTo (sec, toggleMenu = true, offset) {
        this.$scrollTo('.section__container.__' + sec, 400, { offset: offset })

        if (toggleMenu) {
          this.toggleMenu()
        }
      },
      /*
      Stick header menu to top when scroll more than 100vh
       */
      checkNavSticking () {
        if (process.browser) {
          this.stickNav = window.scrollY > window.innerHeight;
        }
      }
    },

    created () {
      if (process.browser) {
        window.addEventListener('scroll', this.checkNavSticking);
      }
    },

    destroyed () {
      if (process.browser) {
        window.removeEventListener('scroll', this.checkNavSticking);
      }
    }
  }
</script>

<style lang="sass">
</style>
