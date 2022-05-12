import cn from './zh-CN'
import us from './en-US'

window.z18n = function (local, chunks) {
  let val = window.zlocal[local]
  chunks.forEach((chunk, i) => {
    val = val.replace(new RegExp(`\\$${i}`), chunk)
  })
  return val
}

function getLocal (language, forceUpdate) {
  if (window.zlocal && !forceUpdate) return
  let local = cn
  switch (language) {
    case 'zh-CN':
      local = cn
      break
    case 'en-US':
      local = us
      break
  }
  /**
   * 对语言包进行遍历，从中支持语言包嵌套语法
   */
  for (const key in local) {
    let val = local[key]
    const match = val.match(/\{\{\S*?\}\}/g)
    if (match) {
      match.forEach(item => {
        const reg = new RegExp(item.replace(/\{/g, '\\{').replace(/\}/g, '\\}'))
        val = val.replace(reg, local[item.replace(/\{|\}/g, '')])
      })
    }
    local[key] = val
  }
  window.zlocal = local
  return local
}

export default {
  data () {
    return {
      local: window.zlocal
    }
  },
  beforeCreate () {
    getLocal('en-US')
  },
  methods: {
    updateLocal (language) {
      this.local = getLocal(language, true)
    },
    z18n (local, chunks) {
      return window.z18n(local, chunks)
    }
  }
}
