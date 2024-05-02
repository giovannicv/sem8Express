const express = require('express')
//const routeUsers = require('./src/routes/users')

const app = express()
const PORT = 3000
const HOST = 'localhost'

//app.use(express.static('./src/routes'))

//app.use('/users', routeUsers)


app.get('/',(req, res) => {
	res.send('Estas en localhost:3000/')
}) 

app.get('/login',(req, res) => {
	res.send('Deberias logiarte')
}) 

app.get('/home/',(req, res) => {
	res.send('Deberias')
})

app.listen(PORT, HOST, () => {
    console.log('Server run en http://${HOST}:${PORT}');
})