'use strict'
// ---------------------------------------------------------------------
// ROUTING
// ---------------------------------------------------------------------
const express = require('express')
// ---------------------------------------------------------------------
//controller books
// ---------------------------------------------------------------------
const controller = require('../controllers/controller.api.books')

// Initiate Express
const app = express()
const router = express.Router()
const books = require('../data/books')

router.get('/ping', (req, res, next) => {
  res.send('PONG!')
})

router.get('/books', controller.viewBooks)

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
