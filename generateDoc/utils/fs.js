/**
 * Created by yqdong on 2017/10/24.
 * qq: 1013501639
 * @author yqdong
 *
 */
const fs = require('fs')
const path = require('path')

module.exports = {
  readDir (basePath, callback) {
    fs.readdir(basePath, (err, files) => {
      if (err) {
        console.error('目录读取失败', err)
        return
      } else {
        files.forEach(fileOrDir => {
          fs.stat(path.resolve(basePath, fileOrDir), (err, stat) => {
            if (stat.isFile()) {
              callback(basePath, fileOrDir, stat)
            } else if (stat.isDirectory()) {
              this.readDir(path.resolve(basePath, fileOrDir), callback)
            }
          })
        })
      }
    })
  }
}
