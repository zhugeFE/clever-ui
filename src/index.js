import './assets/styles/reset.sass'
import './assets/icons/iconfont.css'
import button from './components/button/index.js'
import radioButton from './components/radio-button/index.js'
import input from './components/input/index'
import checkbox from './components/checkbox/index'
import selector from './components/selector/index'
import dataGrid from './components/data-grid/index'
import gridColumn from './components/grid-column/index'
import tooltip from './components/tooltip/index'
import badge from './components/badge/index'
import loading from './components/loading/index'
import tabs from './components/tabs/index'
import tabPanel from './components/tab-panel/index'
import dialog from './components/dialog'
import reload from './components/reload'
import radio from './components/radio'
import scrollContainer from './components/scroll-container'
import scrollLazyPanel from './components/scroll-lazy-panel'
import charts from './components/charts'
import pieChart from './components/pie-chart'
import tag from './components/tag'
import calendar from './components/calendar'
import pagination from './components/pagination'
import tree from './components/tree'
import flow from './components/flow'
import forceChart from './components/force-chart'
import dropdown from './components/dropdown/index'
import datePicker from './components/date-picker/index'
import dateRangePicker from './components/date-range-picker/index'
import {util} from './utils'

import msg from './components/message'
import notification from './components/notification'

// import directives from './directives/main'

const components = [
  button,
  radioButton,
  input,
  selector,
  checkbox,
  dataGrid,
  gridColumn,
  tooltip,
  badge,
  loading,
  tabs,
  tabPanel,
  dialog,
  reload,
  radio,
  scrollContainer,
  scrollLazyPanel,
  tag,
  calendar,
  pagination,
  tree,
  flow,
  forceChart,
  dropdown,
  datePicker,
  dateRangePicker,

  charts,
  pieChart
]

const install = function (Vue) {
  // components
  components.forEach((component) => {
    component.install(Vue)
  })

  // plugins
  Vue.prototype.$message = msg
  Vue.prototype.$notification = notification
  Vue.prototype.$util = util
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  button,
  radioButton,
  input,
  selector,
  checkbox,
  dataGrid,
  gridColumn,
  tooltip,
  badge,
  loading,
  tabs,
  tabPanel,
  dialog,
  reload,
  radio,
  scrollContainer,
  scrollLazyPanel,
  tag,
  calendar,
  pagination,
  tree,
  flow,
  dropdown,
  datePicker,
  dateRangePicker,
  charts,
  pieChart
}
