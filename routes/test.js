'use strict'
// ---------------------------------------------------------------------
// ROUTING
// ---------------------------------------------------------------------
const express = require('express')

// Initiate Express
const app = express()
const router = express.Router()
const books = require('../data.js')

router.get('/ping', (req, res, next) => {
  res.send('PONG!')
})

router.get('/books', (req, res, next) => {
  //req.body.body
  //req.params
  //req.query
  var new_book = {
    id: Number(req.body.id),
    name: req.body.name,
    price: Number(req.body.price)
  }
  books.push(new_book)
  res.json(books)
})



module.exports = router
