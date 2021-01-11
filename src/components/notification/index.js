import CNotification from './index.vue'
// import {util} from '../../utils'
const notification = function (options) {
  const notice = new CNotification({
    data: options
  }).$mount()
  const clazz = `c-notification-container-${notice.placement.toLowerCase()}`
  if (!document.querySelector('.' + clazz)) {
    let container = document.createElement('div')
    container.setAttribute('class', clazz)
    let style = {
      position: 'fixed'
    }
    switch (notice.placement) {
      case 'topLeft':
        style.left = style.top = '20px'
        break
      case 'topRight':
        style.right = style.top = '20px'
        break
      case 'bottomLeft':
        break
      case 'bottomRight':
        break
    }
    for (const key in style) {
      container.style[key] = style[key]
    }
    document.body.appendChild(container)
  }
  document.querySelector('.' + clazz).appendChild(notice.$el)
}
notification.install = function(Vue) {
  Vue.prototype.$notification = notification
}
export default notification
