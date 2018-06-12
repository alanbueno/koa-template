const Raven = require('raven')
const config = require('config')
const ignoreErros = [400, 401, 404]

module.exports = app => {
  if (!config.sentry.url) { return app.on('error', err => console.error(err)) }

  Raven.config(config.sentry.url).install()

  app.on('error', err => {
    if (ignoreErros.indexOf(err.output.statusCode) >= 0) { return }

    console.error(err)
    const requestData = Raven.getContext()
    if (Object.keys(requestData).length > 0) { Raven.captureException(err, { extra: requestData }) } else { Raven.captureException(err) }
  })
}
