const pkg = require('../../package.json')

module.exports = async (ctx, next) => {
  const start = Date.now()

  await next()

  ctx.set('x-response-time', Math.ceil(Date.now() - start))
  ctx.set('version', pkg.version)
}
