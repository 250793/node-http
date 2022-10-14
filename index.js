const express = require('express')

const app = express()

const hostname = '192.168.2.37'
const port = 5001
const filmes = [
    {id: 1, nome: 'Mercenarios',favoritos:true},
    {id: 2, nome: 'Lagoa Azul',favoritos:true},
    {id: 3, nome: 'Trabalhoes',favoritos:false},

]

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())
//uri 
app.get('/', (req, res) => {
    res.json({ nome: 'Fabricio!' })
}),
    app.get('/filmes', (req, res) => {
        res.send(filmes.filter(i => i.favoritos)) 
    })
app.get('/html', (req, res)=>{
    res.sendFile(`${__dirname}/index.html`)
})
app.listen(port, hostname, () => console.log(`http://${hostname}:${port}`))