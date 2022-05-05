const PORT = process.env.PORT || 8080
const SECRET = process.env.SECRET
const http = require('http')
const createHandler = require('github-webhook-handler')

const handler = createHandler({
  path: '/',
  secret: SECRET
})

http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404
    res.end('no such location')
  })
}).listen(PORT)

handler.on('error', function (err) {
  console.error('Error:', err.message)
})

handler.on('push', function (event) {
  if (event.repository.name === '92thunder.dev') {
    console.log(event)
    console.log(event.repository.ref)
  }
})
