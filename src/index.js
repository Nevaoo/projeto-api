const express = require('express')
const app = express()

const router = require('./controllers/authcontrollers')

app.use(express.json())
app.use(router)

app.listen(3000, () => {
    console.log('Ta rodando o codigo')
})
