const express = require('express')
const server = express()

server.use('/assets', express.static('assets'))

server.get('*', (request, response) => {
  response.sendFile(`${__dirname}/index.html`)
})

server.listen(4567, () => {
  console.log('* Listening on http://localhost:4567')
  console.log('Use Ctrl-C to stop')
})
