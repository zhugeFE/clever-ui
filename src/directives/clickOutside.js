/**
 * Created by yqdong on 2017/4/25.
 * qq: 1013501639
 * @author yqdong
 *
 */
import {dom} from '../utils/index'

const nodeList = []
const mouseDownHandle = function (event) {
  event = event || window.event
  const target = event.target
  for (let item of nodeList) {
    if (!item.node.contains(target)) {
      item.handle.call(item.context, target)
    }
  }
}

dom.on(document, 'mousedown', mouseDownHandle)

export default {
  bind (el, binding, vnode) {
    nodeList.push({
      node: el,
      handle: binding.value,
      context: vnode
    })
  },
  unbind (el, binding, vnode) {
    for (let i in nodeList) {
      var item = nodeList[i]
      if (item.node === el && item.handle === binding.value && item.context === vnode) {
        nodeList.splice(i, 1)
        break
      }
    }
  }
}
