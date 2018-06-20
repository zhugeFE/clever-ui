import Vue from 'vue'
import Router from 'vue-router'
import Index from '@docs/modules/index.vue'
import Button from '@docs/modules/button/index.vue'
import Checkbox from '../modules/checkbox/index.vue'
import Select from '../modules/selector/index.vue'
import Input from '@docs/modules/input/index.vue'
import grid from '../modules/dataGrid/index.vue'
import tooltip from '../modules/tooltip/index.vue'
import badge from '../modules/badge/index.vue'
import loading from '../modules/loading/index.vue'
import tab from '../modules/tab/index.vue'
import message from '../modules/message/index.vue'
import dialog from '../modules/dialog/index.vue'
import charts from '../modules/echarts/index.vue'
import reload from '../modules/reload/index.vue'
import radio from '../modules/radio/index'
import scroll from '../modules/scroll/index'
import tag from '../modules/tag/index'
import overview from '../modules/overview/index'
import calendar from '../modules/calendar/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: 'button',
      children: [
        {
          path: '/overview',
          name: 'overview',
          component: overview
        },
        {
          path: '/button',
          name: 'button',
          component: Button
        },
        {
          path: '/input',
          name: 'input',
          component: Input
        },
        {
          path: '/checkbox',
          name: 'checkbox',
          component: Checkbox
        },
        {
          path: '/radio',
          name: 'radio',
          component: radio
        },
        {
          path: '/select',
          name: 'select',
          component: Select
        },
        {
          path: '/grid',
          name: 'grid',
          component: grid
        },
        {
          path: '/calendar',
          name: 'calendar',
          component: calendar
        },
        {
          path: '/tooltip',
          name: 'tooltip',
          component: tooltip
        },
        {
          path: '/badge',
          name: 'badge',
          component: badge
        },
        {
          path: '/loading',
          name: 'loading',
          component: loading
        },
        {
          path: '/tab',
          name: 'tab',
          component: tab
        },
        {
          path: '/tag',
          name: 'tag',
          component: tag
        },
        {
          path: '/message',
          name: 'message',
          component: message
        },
        {
          path: '/dialog',
          name: 'dialog',
          component: dialog
        },
        {
          path: '/charts',
          name: 'charts',
          component: charts
        },
        {
          path: '/reload',
          name: 'reload',
          component: reload
        },
        {
          path: '/scroll',
          name: 'scroll',
          component: scroll
        }
      ]
    }
  ]
})
