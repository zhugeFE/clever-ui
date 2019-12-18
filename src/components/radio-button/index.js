import radioButton from './radioButton'

radioButton.install = function (Vue) {
  Vue.component(radioButton.name, radioButton)
  Vue.component(radioButton.name.replace(/c|C/, 'zg'), radioButton)
}

export default radioButton
