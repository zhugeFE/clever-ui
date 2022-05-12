let util = {
  dayTime: 24 * 60 * 60 * 1000,
  colors: [
    '#00a0e9', '#f4b93b', '#85bd41', '#f29c9f', '#8f82bc',
    '#0068b7', '#f29b76', '#13b5b1', '#ea68a2', '#fff100',
    '#1ec0ff', '#f9a11b', '#8cd790', '#40ccca', '#aaabd3',
    '#2b90d9', '#ec7a4a', '#f29b76', '#ea68a2', '#ffdd38'
  ],
  type (obj) {
    return Object.prototype.toString.call(obj)
  },
  isObject (obj) {
    return this.type(obj) === '[object Object]'
  },
  isArray (obj) {
    return this.type(obj) === '[object Array]'
  },
  isString (obj) {
    return this.type(obj) === '[object String]'
  },
  isNumber (obj) {
    return this.type(obj) === '[object Number]'
  },
  isDate (obj) {
    return this.type(obj) === '[object Date]'
  },
  isFunction (obj) {
    return this.type(obj) === '[object Function]'
  },
  equal (a, b) {
    return JSON.stringify(a) === JSON.stringify(b)
  },
  guid () {
    function s4 () {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
  },
  /**
   * 为单数前补0
   * @param num
   * @returns {string}
   */
  toDoubleNumber (num) {
    num += ''
    return num > 9 ? num : ('0' + num)
  },
  /**
   * 日期格式化
   * @param date
   * @param formatter
   * @returns {string}
   */
  dateFormat (date = new Date(), formatter = 'yyyy-mm-dd') {
    return formatter.replace('yyyy', date.getFullYear())
      .replace('mm', this.toDoubleNumber(date.getMonth() + 1))
      .replace('dd', this.toDoubleNumber(date.getDate()))
  },
  /**
   * 日期格式化
   * @param date
   * @param formatter
   * @returns {string}
   */
  timeFormat (date = new Date(), formatter = 'hh:mm:ss', autoShort) {
    if (this.isDate(date)) {
      return formatter.replace('hh', this.toDoubleNumber(date.getHours()))
        .replace('mm', this.toDoubleNumber(date.getMinutes()))
        .replace('ss', this.toDoubleNumber(date.getSeconds()))
    } else if (this.isNumber(date)) {
      // formatter 格式化规则 如:{s:'秒', h:'小时', m: '分钟'}
      let s = parseInt(date / 1000)
      let m = parseInt(s / 60)
      let h = parseInt(m / 60)
      s = s - m * 60
      m = m - h * 60
      if (!h && autoShort) {
        formatter = formatter.replace(/hh\S*?mm/, 'mm')
        if (!m) {
          formatter = formatter.replace(/mm\S*?ss/, 'ss')
          return formatter.replace('ss', s)
        }
      }
      return formatter.replace('hh', this.toDoubleNumber(h))
        .replace('mm', this.toDoubleNumber(m))
        .replace('ss', this.toDoubleNumber(s))
    }
  },
  /**
   * 判断两个日期是否是同一天
   * @param day1
   * @param day2
   * @returns {boolean}
   */
  isOneDay (day1, day2) {
    return this.dateFormat(day1) === this.dateFormat(day2)
  },
  /**
   * 比较两个日期大小，并返回天数差
   * @param day1
   * @param day2
   * @returns {number}
   */
  compareDays (day1, day2) {
    let a = new Date(day1.getFullYear(), day1.getMonth(), day1.getDate())
    let b = new Date(day2.getFullYear(), day2.getMonth(), day2.getDate())
    let res = (a.getTime() - b.getTime()) / this.dayTime
    return res
  },
  /**
   * 获取指定范围的随机数
   * @param min
   * @param max
   * @returns {*}
   */
  random (min, max) {
    return Math.round(Math.random() * (max - min)) + min
  },
  /**
   * 克隆对象
   * @param obj
   * @returns {*}
   */
  clone (obj) {
    if (this.isObject(obj)) {
      let result = {}
      for (let key in obj) {
        const prop = obj[key]
        result[key] = this.clone(prop)
      }
      return result
    } else if (this.isArray(obj)) {
      let result = []
      for (let i = 0; i < obj.length; i++) {
        const item = obj[i]
        result.push(this.clone(item))
      }
      return result
    } else {
      return obj
    }
  },
  mergeObject (defaults, option) {
    defaults = defaults || {}
    option = option || {}
    for (let prop in defaults) {
      if (this.isObject(defaults[prop])) {
        option[prop] = option[prop] ? option[prop] : {}
        this.mergeObject(defaults[prop], option[prop])
      } else if (this.isArray(defaults[prop])) {
        if (!option[prop] || option[prop] === []) {
          option[prop] = defaults[prop]
        } else {
          let i = 0
          let optLenght = option[prop].length
          let defaultLength = defaults[prop].length
          for (i; i < optLenght && i < defaultLength; i++) {
            option[prop][i] = this.mergeObject(defaults[prop][i], option[prop][i])
          }
        }
      } else {
        option[prop] = (option[prop] === null || option[prop] === undefined) ? defaults[prop] : option[prop]
      }
    }
    return option
  },
  /**
   * 将数字转为千分位分割格式
   * @param num
   * @returns {string}
   */
  toThousands (num) {
    let source = String(num).split('.') // 按小数点分成2部分
    source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), '$1,') // 只将整数部分进行都好分割
    return source.join('.') // 再将小数部分合并进来
  },
  /**
   * 将秒转为分钟、小时、天
   * @param num
   * @returns {string}
   */
  toTime (value, zlocal) {
    let m = parseInt(value / 60)
    let h = parseInt(value / 3600)
    let d = parseInt(value / (24 * 3600))
    if (h > 24) {
      return d + zlocal.day
    } else if (m > 60) {
      return h + zlocal.shi
    } else {
      return m + zlocal.fen
    }
  },
  getRegExp (str) {
    let keyWords = /\\|\^|\$|\*|\+|\?|\{|\}|\[|\]|\.|:|=|\||-|\/|<|!|\(|\)/
    let words = []
    str.split(/\s{0}/).forEach(code => {
      if (keyWords.test(code)) {
        words.push(`\\${code}`)
      } else {
        words.push(code)
      }
    })
    return new RegExp(words.join(''))
  },
  /**
   * 从中间拆分字符串,长度超出的话，解析为xxx...xxx
   * @param str
   * @param config
   * @returns {string}
   */
  strMiddleSplit (str, config = {
    maxLength: 20,
    beginLength: 8,
    endLength: 8,
    replaceStr: '...'
  }) {
    str += ''
    let reg = {
      fullCharReg: /[^\x00-\xff]/,
      fullCharsReg: /[^\x00-\xff]/g,
      anyChars: /[\S\s]{1}/g
    }

    let fullCharLength = (str.match(reg.fullCharsReg) || []).length
    let fullLength = str.length + fullCharLength
    let beginArr = []
    let beginLength = 0
    let endArr = []
    let endLength = 0

    if (fullLength > config.maxLength) {
      let strArr = str.match(reg.anyChars)

      strArr.forEach(char => {
        if (beginLength >= config.beginLength) return
        let len = reg.fullCharReg.test(char) ? 2 : 1
        beginLength += len
        beginArr.push(char)
      })

      strArr.reverse().forEach(char => {
        if (endLength >= config.endLength) return
        let len = reg.fullCharReg.test(char) ? 2 : 1
        endLength += len
        endArr.push(char)
      })

      return beginArr.join('') + config.replaceStr + endArr.reverse().join('')
    }

    return str
  },
/**
* 计算百分比值
* @param {number} numerator 分子
* @param {number} denominator 分母
* @param {number} precision 小数精度
* @returns {string}
*/
  percentCalculate (numerator, denominator, precision = 2) {
    let data = 0
    if (numerator && denominator) {
      precision = Math.pow(10, precision)
      numerator = numerator * precision * 100
      data = Math.floor(numerator / denominator) / precision
    }
    return data + '%'
  },
  /**
   * 节流
   * @param {function} fn 执行函数
   * @param {number | string} wait 等待时间
   * @returns {function}
   */
  throttle(fn, wait) {
    let pre = Date.now()
    return function() {
      const context = this
      const args = arguments
      const now = Date.now()
      if (now - pre >= wait) {
        fn.apply(context, args)
        pre = now
      }
    }
  },
  getTooltipLabel(label) {
    return `<span style="opacity: 0.8;">${label}</span>`
  },
  getWeekNum(date) {
    let now = new Date(date)
    let day = now.getDay()
    let weeks = ['日', '一', '二', '三', '四', '五', '六']
    return weeks[day]
  }
}

export default util
