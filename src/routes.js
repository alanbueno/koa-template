const router = require('koa-router')()
const pjson = require('../package.json')

module.exports = app => {
  const exampleResource = require('./resources/someResource')

  router.get('/', ctx => {
    try {
      ctx.body = {
        version: pjson.version,
        uptime: process.uptime()
      }
      ctx.status = 200
    } catch (err) {
      ctx.status = 500
    }
  })

  // health check
  router.get('/ping', async ctx => {
    try {
      ctx.body = 'pong'
      ctx.status = 200
    } catch (err) {
      ctx.status = 500
    }
  })

  app.use(router.routes(), router.allowedMethods())
  app.use(exampleResource.routes(), exampleResource.allowedMethods())
}
