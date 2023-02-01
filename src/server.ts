/*npm install express
npm install express*/

import express from 'express'
import { Server } from 'http'
//importando rotas
import mainRoutes from './routes/index'
//importando o path
import path, { dirname } from 'path'

import mustache from 'mustache-express'

const server = express()

server.set('view engine','mustache')

//usando as rotas
server.use (mainRoutes)

//criando rota pra pasta public
server.use(express.static(path.join(__dirname,'../public')))
//rota para views
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())

server.listen(3000)


//pagina n encontrda
server.use((req,res) =>{
    res.status(404).send("foi de Americanas")
})