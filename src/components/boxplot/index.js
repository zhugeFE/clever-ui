import boxplot from './boxplot'

boxplot.install = function (Vue) {
  Vue.component(boxplot.name, boxplot)
  Vue.component(boxplot.name.replace(/c|C/, 'zg'), boxplot)
}

export default boxplot
