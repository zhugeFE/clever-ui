// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import zhugeView from '../src'
import demoPanel from './components/demoPanel'
import docMarkdown from './components/docMarkdown'
import VueMarkdown from 'vue-markdown'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(zhugeView)
Vue.component('vue-markdown', VueMarkdown)
Vue.component('doc-markdown', docMarkdown)
Vue.component('demo-panel', demoPanel)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
