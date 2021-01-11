import directives from '../../directives/main'

const install = function(Vue) {
  for (let key in directives) {
    let directive = directives[key]
    Vue.directive(key, directive)
  }
}
export default {
  install
}
