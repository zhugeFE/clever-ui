import './assets/styles/reset.less'
import './assets/icons/iconfont.css'
import button from './components/button/index.js'
import radioButton from './components/radioButton/index.js'
import input from './components/input/index'
import checkbox from './components/checkbox/index'
import selector from './components/selector/index'
import dataGrid from './components/dataGrid/index'
import gridColumn from './components/gridColumn/index'
import tooltip from './components/tooltip/index'
import badge from './components/badge/index'
import loading from './components/loading/index'
import tabs from './components/tab/index'
import tabPanel from './components/tabPanel/index'
import dialog from './components/dialog'
import reload from './components/reload'
import radio from './components/radio'
import {scrollContainer, scrollLazyPanel} from './components/scroll'
import charts from './components/echarts'
import pieChart from './components/pie'
import tag from './components/tag'
import calendar from './components/calendar'
import pagination from './components/pagination'
import tree from './components/tree'
import flow from './components/flow'
import forceChart from './components/forceChart'
import dropdown from './components/dropDown/index'
import datePicker from './components/datePicker/index'
import dateRangePicker from './components/dateRangePicker/index'
import popover from './components/popover/index'
import {util} from './utils'

import msg from './components/message'
import notification from './components/notification'

import directives from './directives/main'

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
  pieChart,
  popover
]

const install = function (Vue) {
  // directives
  for (let key in directives) {
    let directive = directives[key]
    Vue.directive(key, directive)
  }

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
  install
}
