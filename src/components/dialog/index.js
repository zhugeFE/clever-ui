/**
 * Created by yqdong on 2017/11/21.
 * qq: 1013501639
 * @author yqdong
 *
 */
import dialog from './dialog.vue'

dialog.install = function (Vue) {
  Vue.component(dialog.name, dialog)
  Vue.component(dialog.name.replace(/c|C/, 'zg'), dialog)
}

export default dialog
