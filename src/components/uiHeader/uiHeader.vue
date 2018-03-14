<template lang="pug">

  .header__container(
    :class="{ 'header__container--fixed': showMenu }"
    :style="showMenu ? { 'background': styles.header.bgFixed }: ''"
  )

    .header__info.d-flex(
      :class="{ 'header__info--sticked' : stickNav }"
      :style="showMenu ? '': { backgroundColor: styles.header.bg }"
    )

      .header__burger-wrap(:style="{ backgroundColor: styles.burger.bg }")

        .header__burger-menu(
          @click="toggleMenu"
          :class="{ '__white open' : showMenu }"
        )
          span(
            v-for="i in 4"
            :style=`{
              backgroundColor: showMenu
              ? styles.burger.line.active
              : styles.burger.line.default
            }`
          )

      .header__logo
        img(
          alt=""
          :src="data.logo.url"
        )

      slot(name="headerContent")


    .header__nav
      .header__locale-container(v-click-outside="closeLocaleList")

        .header__locale-wrap(
          :class="{ 'header__locale-wrap--active' : showLocales }"
          :style="{ backgroundColor: styles.locale.bg }"
        )

          ul.header__locale-list(v-show="showLocales")

            li.header__locale-list-item(
              v-for="(val, key) in data.locale.list"
              :class="{active: key === data.locale.active}"
              @click="setLangManually(key)"
            )
              a(
                v-html="val.full"
                :href="`/${key}/`"
                :style="{ color: styles.locale.color}"
              )

        .header__locale(:class="{'header__locale--active': showLocales}")

          .header__locale-selected(
            :class="{ active: showLocales }"
            :style=`{ 
              backgroundColor: styles.locale.bg,
              color: styles.locale.color
            }`
            v-html="data.locale.active"
            @click="toggleLocales($event)"
          )

        slot(name="headerBtns")


    template(v-if="showMenu")
      .header__logo.header__logo--mobile
        img(
          alt=""
          :src="data.logo.url"
        )

      ul.header__menu
        li.header__menu-nav(v-for="(nav, index) in data.menu", @click="scrollTo(index, true, -70)") {{ nav }}

      .header__share
        span.header__share-title(v-html="data.share.title")
        .header__socials
          a(href="https://www.facebook.com/ICEX.CH/"  target="_blank").socicon-facebook.fs40.white
          a(href="https://vk.com/icexch"              target="_blank").socicon-vkontakte.fs40.white
          a(href="https://www.instagram.com/icex.ch/" target="_blank").socicon-instagram.fs40.white
          a(href="https://t.me/icexch"                target="_blank").socicon-telegram.fs40.white
          a(href="https://twitter.com/icex_ch"        target="_blank").socicon-twitter.fs40.white

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
      styles: {
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
  @import "./uiHeader.sass";
</style>
