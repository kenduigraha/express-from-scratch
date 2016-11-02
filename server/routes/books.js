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
  res.json(books)
  // var new_book = {
  //   id: Number(req.body.id),
  //   name: req.body.name,
  //   price: Number(req.body.price)
  // }
  // books.push(new_book)
})

router.get('/books/:id', (req, res, next) => {
  let book = books.filter( (book) => {
    return book.id == req.params.id
  })[0]

  if(!book) res.status(404).json({message: "Data Not Found"})

  res.json(book)
})

// DELETE
router.delete('/books/:id', (req, res, next) => {
  // Get book by id
  const book = books.filter((book) => {
    return book.id === Number(req.params.id)
  })[0]

  // Send 404 error if book not found
  if(!book) res.status(404).json({'message': "No Book Found"})

  // Delete the book by id
  books.splice(books.indexOf(book), 1)

  // Send success message
  res.json({ 'message' : `Book ${req.params.id} has been deleted`})
})

router.put('/books/:id', (req, res, next) => {
  // Get book by id
  const book = books.filter((book) => {
    return book.id === Number(req.params.id)
  })[0]

  // Send 404 error if book not found
  if(!book) res.status(404).json({'message': "No Book Found"})

  const index = books.indexOf(book)
  const key = Object.keys(req.body)

  key.forEach(key => {
    // book[key] = req.body[key]
    book.id = Number(req.body.id),
    book.name = req.body.name,
    book.price = Number(req.body.price)
  })

  books[index] = book

  // Send success message
  res.json({ 'message' : `Book ${req.params.id} has been updated`})
})

module.exports = router
