/**
 * Created by yqdong on 2018/1/25.
 * qq: 1013501639
 * @author yqdong
 *
 */
import {dom} from '../utils'
let callStack = []
let timeout = null
dom.on(window, 'resize', function () {
  if (timeout) {
    clearTimeout(timeout)
    timeout = null
  }
  timeout = setTimeout(() => {
    callStack.forEach(item => {
      if (!item.context.context._isDestroyed) item.handle.call(item.context)
    })
  }, 66)
})
export default {
  bind (el, binding, vnode) {
    callStack.push({
      node: el,
      handle: binding.value,
      context: vnode
    })
  },
  unbind (el, binding, vnode) {
    let current = {
      node: el,
      handle: binding.value,
      context: vnode
    }
    for (let i = 0; i < callStack.length; i++) {
      let item = callStack[i]
      if (item === current) {
        callStack.splice(i, 1)
        return
      }
    }
  }
}
