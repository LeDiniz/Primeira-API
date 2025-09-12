const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/api/:carro', (req, res) => {
    const carro = req.params.carro
    res.send(`Seu carro é ${carro}`)
})

app.listen(3000, () => {
    console.log('Servidor ON em http://localhost:3000')
})
