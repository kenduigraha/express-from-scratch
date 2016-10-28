'use strict'
// ---------------------------------------------------------------------
// ROUTING
// ---------------------------------------------------------------------
const express = require('express')

// Initiate Express
const app = express()
const router = express.Router()

router.get('/ping', (req, res, next) => {
  res.send('PONG!')
})

router.get('/books', (req, res, next) => {
  res.json(books)
})


module.exports = router
