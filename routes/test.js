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
  //req.body.body = /
  //req.params = /params
  //req.query = ?query={value}
  var new_book = {
    id: Number(req.body.id),
    name: req.body.name,
    price: Number(req.body.price)
  }
  books.push(new_book)
  res.json(books)
})

router.get('/books/:id', (req, res, next) => {
  let book = books.filter( book => {
    return book.id == req.params.id
  })[0]
  console.log(book);
  res.json(book)
})

module.exports = router
