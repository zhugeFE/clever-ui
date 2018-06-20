import calendar from './calendar.vue'

[calendar].forEach((component) => {
  component.install = function (Vue) {
    Vue.component(component.name, component)
  }
})

export {
  calendar
}
