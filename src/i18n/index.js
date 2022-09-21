import us from './en-US'
import cn from './zh-CN'

function getLocal(language) {
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
  return local
}

export default getLocal(process.env.LANG)
