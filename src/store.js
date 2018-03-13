import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    common: {
      locale: {
        active: 'en',
        show: false,
      }
    },

    glossary: {

      locales: {
        en: {
          full: 'English',
          short: 'Eng',
          desc: 'eng',
        },
        ru: {
          full: 'Русский',
          short: 'Rus',
          desc: 'rus',
        },
        ko: {
          full: '한국어',
          short: '한',
          desc: 'kor',
        },
      },

      colors: {
        tangaroa: '#021032',
        pale_sky: '#667180',
        cadet_blue: '#a6afbd',
        regent_gray: '#8592a5',

        // oragn btn
        pomegranate: '#ed4e1c', // default
        flamingo: '#f4683d', // hover
        orange_roughy: '#d14318', // active

        // blue btn
        torea_bay: '#0c3d94', // default
        azure: '#335eac', // hover
        madison: '#0c2d69', // active

        // chart colors
        science_blue: '#0b53d3', // blue for price
        texas_rose: '#febd4c', //yellow
        denim: '#0b50cd',
        athens_gray: '#e7e9f1',
        athens_gray_light: '#f5f6f9',
        gull_gray: '#98a4ba',
        dove_gray: '#707070',
        whisper: '#f3f4f9',
        catalina_blue: '#04246d',

        crimson: '#ed1c24',
      },
    },
  },

  getters: {
    locale: (state) => ({
      list: state.glossary.locales,
      active: state.common.locale.active,
    })
  }
});
