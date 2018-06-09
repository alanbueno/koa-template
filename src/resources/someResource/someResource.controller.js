const Joi = require('joi')
const config = require('config')

function somePostHandler (ctx) {
  const basePath = config.application.basePath
  console.log(basePath)
  Joi.object()
}

module.exports.somePostHandler = somePostHandler
