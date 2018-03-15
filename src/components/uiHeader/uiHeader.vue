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
            :src="data.logo.url"
          )

        .header__content.col-auto(v-if="!showMenu")
          slot(name="headerContent")

      .header__nav.row.justify-content-between
        .header__locale-container(v-click-outside="closeLocaleList")

          .header__locale-wrap( :class="{ 'header__locale-wrap--active' : showLocales }")

            ul.header__locale-list.list-unstyled(v-show="showLocales")

              li.header__locale-list-item(
                v-for="(val, key) in data.locale.list"
                :class="{active: key === data.locale.active}"
                @click="setLangManually(key)"
              )
                a(
                  v-html="val.full"
                  :href="`/${key}/`"
                )

          .header__locale(:class="{'header__locale--active': showLocales}")

            .header__locale-selected.text-white(
              :class="{ active: showLocales }"
              v-html="data.locale.list[data.locale.active].short"
              @click="toggleLocales($event)"
            )
        template(v-if="!showMenu")
          slot(name="headerBtns")


    template(v-if="showMenu")
      .header__logo.header__logo--mobile
        img(
          alt=""
          :src="data.logo.url"
        )

      ul.header__menu.list-unstyled
        li.header__menu-nav(v-for="(nav, index) in data.menu", @click="scrollTo(index, true, -70)") {{ nav }}

      .header__share
        span.header__share-title
          small(v-html="data.share.title")

        .header__socials
          a(href="https://www.facebook.com/ICEX.CH/"  target="_blank").socicon-facebook
          a(href="https://vk.com/icexch"              target="_blank").socicon-vkontakte
          a(href="https://www.instagram.com/icex.ch/" target="_blank").socicon-instagram
          a(href="https://t.me/icexch"                target="_blank").socicon-telegram
          a(href="https://twitter.com/icex_ch"        target="_blank").socicon-twitter

    .scroller(:style="{ 'visibility' : stickNav ? 'visible' : 'hidden' }", @click="scrollTo(1, false, 0)")

</template>

<script>
  import vClickOutside from 'v-click-outside'

  export default {
    name: 'LayoutHeader',

    props: {
      data: {
        type: Object,
        required: true,
      },
    },

    data () {
      return {
        showLocales: true,
        showMenu: false,
        stickNav: false
      }
    },

    directives: {
      clickOutside: vClickOutside.directive
    },

    methods: {

      setLangManually (lang) {
        // this.setLang(lang)
        this.$refs.coinsList.getCoinsData()
      },

      toggleLocales () {
        this.showLocales = !this.showLocales
      },

      closeLocaleList () {
        this.showLocales = false
      },

      toggleMenu () {
        this.showMenu = !this.showMenu

        document.documentElement.style.overflow = this.showMenu
          ? 'hidden'
          : 'initial'
      },
      scrollTo (sec, toggleMenu = true, offset) {
        this.$scrollTo('.section__container.__' + sec, 400, { offset: offset })

        if (toggleMenu) {
          this.toggleMenu()
        }
      },

      checkNavSticking () {
        this.stickNav = window.scrollY > window.innerHeight
      }
    },
    created () {
      window.addEventListener('scroll', this.checkNavSticking)
    },
    destroyed () {
      window.removeEventListener('scroll', this.checkNavSticking)
    }
  }
</script>

<style lang="sass">
</style>
