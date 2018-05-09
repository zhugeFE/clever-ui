/**
 * Created by yqdong on 2017/10/24.
 * qq: 1013501639
 * @author yqdong
 *
 */
const fsUtil = require('./utils/fs')
const path = require('path')
const fs = require('fs')

const config = {
  basePath: path.resolve('../src'),
  output: '../docs/modules'
}

const reg = {
  /**
   * 检测块注释及属性或事件名
   */
  commentAndName: /\/\*\*[\s\S]*?:/g,
  comment: /\/\*\*[\s\S]*?(\*\/)/g,
  props: /props:[\s\S]*?(data|watch|computed|updated|methods|created)/
}

fsUtil.readDir(config.basePath, (filePath, file, stat) => {
  if (/.vue$/.test(file)) {
    fs.readFile(path.resolve(filePath, file), (err, data) => {
      const fileContent = data.toString()
      const matchProps = fileContent.match(reg.props)
      if (!matchProps || !/\{[\s\S]*\}/.test(matchProps[0])) return
      const propContent = matchProps[0].match(/\{[\s\S]*\}/)[0]
      const props = propContent.split(reg.commentAndName)
      const comments = propContent.match(reg.commentAndName)

      if (!props || !comments) return

      let docJson = []
      comments.forEach((comment, i) => {
        const prop = props[i + 1]

        let docItem = {
          name: comment.replace(/(\/\*\*[\s\S]*?\*\/)|:|\n\s*/g, ''),
          type: null,
          required: false,
          default: null
        }
        comment = comment.match(reg.comment)[0]

        // 解析注解信息
        const marks = ['description', 'tip', 'type', 'required', 'default']
        marks.forEach(mark => {
          const regexp = new RegExp('@' + mark + '[\\s\\S]*?\\n')
          if (regexp.test(comment)) {
            docItem[mark] = comment.match(regexp)[0].replace(new RegExp(`(@${mark}\\s)|\\n`, 'g'), '')
          }
        })

        // 解析vue中prop规则属性, 如果有同名注解，则以注解为准
        const rules = ['type', 'required', 'default']
        if (prop.match(/\n/g).length <= 1) {// 简单定义，只定义了属性类型
          docItem.type = prop.replace(/[\s\n]*/g, '').replace(/,$/, '')
        } else {
          rules.forEach(rule => {
            const regexp = new RegExp(rule + '[\\s\\S]*?\\n')
            if (regexp.test(prop) && !docItem[rule]) {
              docItem[rule] = prop.match(regexp)[0]
                .replace(/[\s\n]*/g, '')
                .replace(/,$/, '')
                .replace(new RegExp(`${rule}:`), '')
            }
          })
        }
        docJson.push(docItem)

        // 将解析结果转为json写入docs对应的组件目录
        const pathArr = filePath.split('/')
        const outputDir = path.resolve(__dirname, config.output)
        const outputFilePath = path.resolve(outputDir, pathArr[pathArr.length - 1])

        // 如果有该文件，则将该文件删除，否则直接创建
        fs.stat(outputFilePath, (err) => {
          if (err) {
            fs.mkdirSync(outputFilePath)
          }
          fs.writeFile(path.resolve(outputFilePath, `${file.split('.')[0]}.json`), JSON.stringify(docJson), err => {
            if (err) {
              console.error('api文档写入错误', path.resolve(outputFilePath, 'api.json'))
            }
          })
        })
      })
    })
  }
})
