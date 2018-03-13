import Header from './components/header.vue'

function plugin (Vue) {
  Vue.component('Header', Header)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  Header,
  version
}
