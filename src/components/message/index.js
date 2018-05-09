/**
 * Created by yqdong on 2017/11/21.
 * qq: 1013501639
 * @author yqdong
 *
 */
import Message from './message.vue'

const msg = function (options) {
  const message = new Message({
    data: options
  }).$mount()

  document.body.appendChild(message.$el)
}

export default msg
