function somePostHandler (ctx) {
  ctx.body = {
    first: 'Test',
    second: 'Another test',
    number: 1,
    flag: true
  }
}

module.exports.somePostHandler = somePostHandler
