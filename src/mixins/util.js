/**
 * Created by yqdong on 2017/11/6.
 * qq: 1013501639
 * @author yqdong
 *
 */
import {util} from '../utils/index'

const log = function () {
  if (util.isString(arguments[0])) {
    let str = arguments[0]
    str = str + (() => {
      let blank = ''
      for (let i = 0; i < (15 - str.length); i++) {
        blank = blank + ' '
      }
      return blank
    })()

    arguments[0] = str
  }
  // console.log.apply(console, arguments)
}
export default {
  methods: {
    time (label) {
      if (this.logTime) console.time(label)
    },
    timeEnd (label) {
      if (this.logTime) console.timeEnd(label)
    }
  },
  beforeCreate () {
    log('beforeCreate', this.$options.name)
  },
  created () {
    log('created', this.$options.name)
  },
  beforeMount () {
    log('beforeMount', this.$options.name)
  },
  mounted () {
    log('mounted', this.$options.name)
  },
  updated () {
    log('updated', this.$options.name)
  },
  activated () {
    log('activated', this.$options.name)
  },
  deactivated () {
    log('deactivated', this.$options.name)
  },
  beforeDestroy () {
    log('beforeDestroy', this.$options.name)
  },
  destroyed () {
    log('destroyed', this.$options.name)
  }
}
