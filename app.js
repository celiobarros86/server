const http = require('http')




http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })

    switch (req.url) {
      case '/':
        res.end('Home')
        break
      case '/contato':
        res.end('Página de contato')
        break
      default:
        res.end('Página Não encontrada')
    }
  })
  .listen(3030, 'localhost')
