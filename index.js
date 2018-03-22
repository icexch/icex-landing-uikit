import Vue from 'vue';
import uiFooter from './components/uiFooter';
// import uiForm from './components/uiForm';
import uiHeader from './components/uiHeader';
// import uiLink from './components/uiLink';
import uiSection from './components/uiSection';
import uiSlider from './components/uiSlider';
import uiSocials from './components/uiSocials';

const uiKit = {
  install(Vue) {
    Vue.component('uiFooter', uiFooter);
    // Vue.component('uiForm', uiForm);
    Vue.component('uiHeader', uiHeader);
    // Vue.component('uiLink', uiLink);
    Vue.component('uiSection', uiSection);
    Vue.component('uiSlider', uiSlider);
    Vue.component('uiSocials', uiSocials);
  }
};

export default uiKit;