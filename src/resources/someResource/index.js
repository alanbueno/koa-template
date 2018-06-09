const config = require('config')
const router = require('koa-router')({ prefix: config.application.basePath })
const controller = require('./someResource.controller')

router.post('/somePost', controller.somePostHandler)

module.exports.router = router
