module.exports = {
  application: {
    host: process.env['HOST'] || '0.0.0.0',
    port: process.env['PORT'] || 3001,
    basePath: ''
  },
  sentry: {
    url: process.env.SENTRY_URL
  }
}
