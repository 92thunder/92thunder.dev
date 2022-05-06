const PORT = process.env.PORT || 8080
const SECRET = process.env.SECRET
const COMMAND = process.env.COMMAND || 'echo test'
const http = require('http')
const createHandler = require('github-webhook-handler')
const { exec } = require('child_process')

const handler = createHandler({
  path: '/webhook',
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
  const payload = event.payload
  const repoName = payload.repository.name
  const branch = payload.ref.split('/').pop()
  if (repoName === '92thunder.dev' && branch === 'main') {
    exec(COMMAND, (err, stdout, stderr) => {
      if (err) {
        console.log(`stderr: ${stderr}`)
        return
      }
      console.log(`stdout: ${stdout}`)
    })
  }
})
