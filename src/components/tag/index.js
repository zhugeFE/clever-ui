/**
 * Created by yqdong on 2018/4/8.
 * qq: 1013501639
 * @author yqdong
 *
 */
import tag from './tag'

tag.install = function (Vue) {
  Vue.component(tag.name, tag)
}

export default tag
