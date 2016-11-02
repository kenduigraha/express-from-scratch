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

router.get('/ping', controller.ping)

router.get('/', controller.getBooks)

router.post('/', controller.addBook)

router.get('/:id', controller.getBookById)

router.put('/:id', controller.updateBookById)

router.delete('/:id', controller.deleteBookById)


module.exports = router
