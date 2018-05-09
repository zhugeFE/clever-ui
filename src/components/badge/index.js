/**
 * Created by yqdong on 2017/11/16.
 * qq: 1013501639
 * @author yqdong
 *
 */
import badge from './badge.vue'

badge.install = function (Vue) {
  Vue.component(badge.name, badge)
}

export default badge
