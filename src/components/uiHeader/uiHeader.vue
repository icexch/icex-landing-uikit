<template lang="pug">

  .header__container(:class="{ 'header__container--fixed': menuOpened }")

    .header__info.d-flex(
      :class="{ 'header__info--sticked' : stickNav }"
      :style="{ backgroundColor: header.bg }"
    )

      .header__burger-wrap(:style="{ backgroundColor: header.burger.bg }")

        .header__burger-menu(
          @click="toggleMenu"
          :class="{ '__white open' : menuOpened }"
        )
          span(
            v-for="i in 4"
            :style=`{
              backgroundColor: menuOpened
              ? header.burger.line.active
              : header.burger.line.default
            }`
          )

      .header__logo
        img(
          alt=""
          :src="header.logo.url"
        )

      slot(name="headerContent")

      //- CryptoPriceList(ref="coinsList", :style="{opacity: menuOpened ? '0': '1' }")

    .header__nav
      .locale__container(v-click-outside="closeLocaleList")

        .locale__wrap#langs(:class="{ 'locale__wrap--active' : showLocales }")

          ul.locale__list(v-show="showLocales")

            li.locale__list-item(
              v-for="(val, key) in locale.list"
              :class="{active: key === locale}"
              @click="setLangManually(key)"
            )
              a(v-html="val.full" :href="`/${key}/`") 

        .header__locale(:class="{'header__lang--active': showLocales}")

          .locale__selected(
            :class="{active: showLocales}"
            v-html="locale.active"
            @click="toggleLocales($event)"
          )

        slot(name="headerBtns")

      //- .header__btns(v-show="!menuOpened")
      //-   a.btn.__small.disabled.__orang( href="#" v-html="")
      //-   a.btn.__small( :href="`https://app.icex.ch/${locale}/auth/signin`" v-html="")
      //-   a.btn.__small.__border( :href="`https://app.icex.ch/${locale}/auth/signup`" v-html="")


    template(v-if="menuOpened")
      .header__logo.--mobile
        //- img(src="/img/logo.svg", :alt="")

      ul.header__menu
        //- li.header__menu-nav(@click="scrollTo(21, true, 0)") {{ $lang['sec21'].label }}
        //- li.header__menu-nav(v-for="nav in anchorsIndexes", @click="scrollTo(nav, true, -70)") {{ $lang['sec' + nav].label }}

      .header__share
        span.header__share-title.fs16.fw_bold.white(v-html="")
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
      locale: {
        type: Object,
        required: true,
      },
      header: {
        type: Object,
        required: true,
      },
    },

    data () {
      return {
        showLocales: true,
        menuOpened: false,
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
        this.menuOpened = !this.menuOpened

        document.documentElement.style.overflow = this.menuOpened
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
