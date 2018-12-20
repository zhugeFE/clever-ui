import button from './button.vue'
import radioButton from './radioButton'

[button, radioButton].forEach((component) => {
  component.install = function (Vue) {
    Vue.component(component.name, component)
    Vue.component(component.name.replace(/c|C/, 'zg'), component)
  }
})

export {
  button,
  radioButton
}
