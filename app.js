const http = require('http')

//https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    console.log('Servidor ON')
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
  .listen(3030, 'localhost') //como o server é aqui mesmo no computador, o padrão é o localhost, mesmo se não indicarmos a função http, ira apontar para o localhost.
