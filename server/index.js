let serve = require('koa-static-server')
let app = require('koa')()
let path = require('path')

app.use(serve({
  rootDir: path.resolve(__dirname, '../dist')
}))
app.listen(3000)
