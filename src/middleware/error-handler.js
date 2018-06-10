const Boom = require('boom')

module.exports = async (ctx, next) => {
  try {
    await next()

    const status = ctx.status || 404
    if (status === 404) { ctx.throw(Boom.notFound('Route not found')) }
  } catch (error) {
    ctx.status = error.isJoi ? 400 : error.isBoom ? error.output.statusCode : (error.status || 500)

    const boomError = Boom.boomify(error, { statusCode: ctx.status })

    ctx.body = boomError.data || boomError.output.payload
  }
}
