import LayoutHeader from 'src/components/LayoutHeader/LayoutHeader.vue'
import { createVM } from '../helpers/utils.js'

// import { mount } from '@vue/test-utils'
// import { expect } from 'chai'

import { locales } from 'src/store/glossary'

describe('LayoutHeader.vue', function () {
  it('should render LayoutHeader components', () => {
    const vm = createVM(this,
      `<LayoutHeader 
        
        locales="${locales}"
      >

      </LayoutHeader>`,
      { components: { LayoutHeader }})
    vm.$el.querySelector('.header__container h1').textContent.should.eql('hello header')

    // const wrapper = mount(LayoutHeader, {
    //   propsData: {
    //     headerLogo: "../../assets/img/logo.svg",
    //     locales,
    //   }
    // })
    // expect(wrapper.props('locales', locales)).toBe(true)
  })
})

