// const, var ou let
const express = require('express')

const mongoose = require('mongoose')
const userRoutes = require('./routes/UserRoutes')

const app = express()

app.use(express.json(''))

//conectando ao mongo db

mongoose.connect('mongodb://localhost:27017/crud',{
    useNewUrlParser: true,
    useUnifiedTopology: true     
}).then(()=>{
        console.log('MongoDB Conectado')
}).catch(e=>{
        console.error('Erro ao conectar', e)
})


//rota basica
app.get('/',(req,res)=>{
    res.send('Servidor está funcionado')
})

app.use('/user',userRoutes)

const port = 3000
app.listen(port, ()=>{
    console.log(' Servidor esta rodando na porta: '+port)
})