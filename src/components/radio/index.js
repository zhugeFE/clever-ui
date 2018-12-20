/**
 * Created by yqdong on 2018/1/8.
 * qq: 1013501639
 * @author yqdong
 *
 */
import radio from './radio'
radio.install = function (Vue) {
  Vue.component(radio.name, radio)
  Vue.component(radio.name.replace(/c|C/, 'zg'), radio)
}

export default radio
