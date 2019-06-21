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
  unbind (el, binding) {
    for (let i in nodeList) {
      var item = nodeList[i]
      // vnode 为Vue 编译生成的虚拟节点，虚拟dom更新后此节点会变，此处不以此变量做判断
      if (item.node === el && item.handle === binding.value) {
        nodeList.splice(i, 1)
        break
      }
    }
  }
}
