const http = require('http')


const hostname = '192.168.2.36'
const port = 5000

http.createServer((req, res) => {
    if (req.url === "/") {
        res.end('Home')
    }
    // res.end("Oi que lindo")
}).listen(port, hostname, () => console.log(`Servidor rodando http://${hostname}:${port}`))