import Vue from 'vue';
import uiFooter from './uiFooter/uiFooter.vue';
import uiForm from './uiForm/uiForm.vue';
import uiHeader from './uiHeader/uiHeader.vue';
import uiLink from './uiLink/uiLink.vue';
import uiSection from './uiSection/uiSection.vue';
import uiSlider from './uiSlider/uiSlider.vue';
import uiSocials from './uiSocials/uiSocials.vue';

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