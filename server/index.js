const express = require('express')
const app = express()
const SERVER_PORT = 5000
const userCtrl = require('./controllers/userController')

app.use(express.json())

//endpoints

app.get('/api/users', userCtrl.getUsers)


app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))