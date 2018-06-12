const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

app.use(bodyParser({ enableTypes: 'json' }))

app.use(require('./middleware/response-header'))

app.use(require('./middleware/error-handler'))
require('./middleware/sentry-logs')(app)

require('./routes')(app)

module.exports = app
