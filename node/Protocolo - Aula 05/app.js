var http = require('http')

http.createServer(function (req, res) {
    res.end("Ola, voce esta conectado")
}).listen(8081)

console.log("O servidor esta funcionando")