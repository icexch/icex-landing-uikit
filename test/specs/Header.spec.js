import LayoutHeader from 'src/components/LayoutHeader/LayoutHeader.vue'
import { createVM } from '../helpers/utils.js'

import {locales} from 'src/store/glossary'

describe('LayoutHeader.vue', function () {
  it('should render LayoutHeader components', function () {
    const vm = createVM(this,
      `<LayoutHeader 
        headerLogo="../../assets/img/logo.svg" 
        locales="${locales}"
      >

      </LayoutHeader>`,
      { components: { LayoutHeader }})
    vm.$el.querySelector('.header__container h1').textContent.should.eql('hello header')
  })
})
