<template lang="pug">

  .header__container(:class="{ 'header__container--fixed': menuIsOpen, 'header__container--sticked-menu': stickNav }")
    .container-fluid

      .header__info.row(:class="{ 'header__info--sticked' : stickNav }")
        .header__burger-wrap

          .header__burger-menu(
            @click="toggleMenu"
            :class="{ 'header__burger-menu--open' : menuIsOpen }"
          )
            span(v-for="i in 4")

        .header__logo.d-none.d-sm-flex
          slot(name="headerLogo")

        .header__content.d-flex.d-sm-none.justify-content-center.pr-5(v-if="menuIsOpen")
          .header__logo.pr-4.pl-0
            slot(name="headerLogo")

        .header__content(v-if="!menuIsOpen")
          .header__label.d-none.d-sm-flex
            .header__label-text(v-html="headerData.label")
          slot(name="headerContent")

          .header__label.d-sm-none
            .header__label-text(v-html="headerData.label")

      .header__nav
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

    template(v-if="menuIsOpen")
      .header__wrap.pb-3
        ul.header__menu.list-unstyled
          li.header__menu-nav.h4(v-for="(nav, index) in headerData.menu", )
            a(href="" @click.prevent="scrollTo(index)") {{ nav }}

        .header__share
          ui-socials(
            color="white"
            :socials="socials"
            :multiline="false"
            :title="headerData.share.title"
          )

    .scroller(:style="{ 'visibility' : stickNav ? 'visible' : 'hidden' }", @click="scrollToTop()")

</template>

<script>
  import uiSocials from '../uiSocials/uiSocials.vue';
  import { mapState, mapGetters } from 'vuex';

  export default {
    name: 'uiHeader',

    props: {
      headerData: {
        type: Object,
        required: true,
      },

      socials: {
        type: Array,
        required: true,
      },
    },

    data () {
      return {
        showLocales: false,
        stickNav: false
      }
    },

    components: {
      uiSocials,
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
        this.menuIsOpen
          ? this.$store.dispatch('common/setUserMenuStatus', false)
          : this.$store.dispatch('common/setUserMenuStatus', true);
      },

      /**
       * Scroll to section
       * @param  {index} - Menu item index start from 0 because add +2 1 section not include
       */
      scrollTo (index) {
        this.$scrollTo(`.section-${index * 1 + 2}`, 400, { offset: -70 })
        this.toggleMenu();
      },
      /*
      Stick header menu to top when scroll more than 100vh
       */
      checkNavSticking () {
        if (process.browser) {
          this.stickNav = window.scrollY > window.innerHeight;
        }
      },
      /**
       * Scroll to first section
       * @return {Scroll event}
       */
      scrollToTop() {
        this.$scrollTo('.section-1', 400);
      },
    },

    computed: {
      ...mapState({
        menuIsOpen: state => state.common.menuIsOpen,
      }),
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
