import Vue from 'vue';
import uiFooter from './uiFooter';
import uiForm from './uiForm';
import uiHeader from './uiHeader';
import uiLink from './uiLink';
import uiSection from './uiSection';
import uiSlider from './uiSlider';
import uiSocials from './uiSocials';

const uiKit = {
  install(Vue) {
    Vue.component('uiFooter', uiFooter);
    Vue.component('uiForm', uiForm);
    Vue.component('uiHeader', uiHeader);
    Vue.component('uiLink', uiLink);
    Vue.component('uiSection', uiSection);
    Vue.component('uiSlider', uiSlider);
    Vue.component('uiSocials', uiSocials);
  }
};

export default uiKit;