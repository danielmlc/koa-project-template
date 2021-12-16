const Koa = require('koa')
const path = require('path')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const koaStatic = require('koa-static')
const { getIPAdress } = require('./common/utils')
const Router = require('koa-router')
// const { initMySql } = require('./common/mysql-provider')
// const yamlConfig = require('./common/yaml-provider')
// const { getModels } = require('./model')
const routesRegist = require('./routes')
const app = new Koa()
const pkg = require('../../package.json')
const server = {
  port: 9090
}
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))

app.use(json())
app.use(logger())
app.use(koaStatic(
  path.join(__dirname, '../contents/')
))
// app.use(async (ctx, next) => {
//   // const sequelize = initMySql(yamlConfig)
//   // const models = await getModels(sequelize)
//   // ctx.models = models
//   //
//   await next()
// })

// 注册路由
const router = new Router()
routesRegist(router)
app.use(router.routes()).use(router.allowedMethods())

app.listen(server.port, () => {
  const ip = getIPAdress()
  let logStr = `${pkg.name} is starting at \n http://localhost:${server.port}`
  if (ip) {
    logStr += `\n http://${ip}:${server.port}`
  }
  console.log(logStr)
})
