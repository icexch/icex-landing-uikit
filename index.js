import Vue from 'vue';
import uiFooter from './components/uiFooter';
import uiIcon from './components/uiIcon';
import uiHeader from './components/uiHeader';
import uiSection from './components/uiSection';
import uiSlider from './components/uiSlider';
import uiSocials from './components/uiSocials';

const uiKit = {
  install(Vue) {
    Vue.component('uiFooter', uiFooter);
    Vue.component('uiIcon', uiIcon);
    Vue.component('uiHeader', uiHeader);
    Vue.component('uiSection', uiSection);
    Vue.component('uiSlider', uiSlider);
    Vue.component('uiSocials', uiSocials);
  }
};

export default uiKit;