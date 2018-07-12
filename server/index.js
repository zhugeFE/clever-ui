let serve = require('koa-static-server')
let Koa = require('koa')
let path = require('path')

let app = new Koa()
app.use(serve({
  rootDir: path.resolve(__dirname, '../dist')
}))
app.listen(80)
