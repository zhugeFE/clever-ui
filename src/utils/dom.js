/**
 * Created by yqdong on 2017/10/12.
 * qq: 1013501639
 * @author yqdong
 *
 */
export default {
  on (dom, eventName, handle, useCapture = false) {
    if (!dom || !eventName || !handle) return
    if (document.addEventListener) {
      dom.addEventListener(eventName, handle, useCapture)
    } else {
      dom.attachEvent('on' + eventName, handle)
    }
  },
  /**
   * addStyleSheet([
   ['h2', // Also accepts a second argument as an array of arrays instead
    ['color', 'red'],
    ['background-color', 'green', true] // 'true' for !important rules
   ],
   ['.myClass',
    ['background-color', 'yellow']
   ]
   ]);
   */
  addStyleSheet (id, rules) {
    let styleEl = document.createElement('style')
    let styleSheet

    styleEl.id = id
    this.removeStyleSheet(id)
    document.head.appendChild(styleEl)
    styleSheet = styleEl.sheet

    for (let i = 0, rl = rules.length; i < rl; i++) {
      let j = 1
      let rule = rules[i]
      let selector = rules[i][0]
      let propStr = ''
      if (Object.prototype.toString.call(rule[1][0]) === '[object Array]') {
        rule = rule[1]
        j = 0
      }

      for (let pl = rule.length; j < pl; j++) {
        let prop = rule[j]
        propStr += prop[0] + ':' + prop[1] + (prop[2] ? ' !important' : '') + ';\n'
      }

      // Insert CSS Rule
      styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length)
    }
  },
  removeStyleSheet (id) {
    document.getElementById(id) && document.getElementById(id).remove()
  },
  /**
   * 获取指定元素的样式
   * @param node
   * @param style
   * @returns {*}
   */
  getStyle (node, style) {
    return window.getComputedStyle(node)[style]
  },
  /**
   * 为指定元素设置样式
   * @param node
   * @param style
   */
  setStyle (node, style) {
    for (let key in style) {
      node.style[key] = style[key]
    }
  },
  /**
   * 校准指定元素的定位方式，如果是static，则置为relative
   * @param node
   */
  setPosition (node) {
    const position = this.getStyle(node, 'position')
    if (position === 'static') {
      this.setStyle(node, {
        position: 'relative'
      })
    }
  }
}
