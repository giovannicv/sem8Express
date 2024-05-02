const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('RUTA: LOCALHOST:3000/USERS/')
})