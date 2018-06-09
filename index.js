const app = require('./src/app')
const config = require('config')

app.listen(config.application.port, config.application.host, (err) => {
  if (err) { throw err }

  console.log(`Server available on : ${config.application.host}:${config.application.port}`)
})
