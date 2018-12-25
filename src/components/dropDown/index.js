import dropDown from './dropdown'

dropDown.install = function (Vue) {
  Vue.component(dropDown.name, dropDown)
  Vue.component(dropDown.name.replace(/c|C/, 'zg'), dropDown)
}

export default dropDown
