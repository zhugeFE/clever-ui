import button from './button.vue'
import radioButton from './radioButton'

[button, radioButton].forEach((component) => {
  component.install = function (Vue) {
    Vue.component(component.name, component)
  }
})

export {
  button,
  radioButton
}
