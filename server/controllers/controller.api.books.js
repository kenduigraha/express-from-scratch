// LEGACY DATA WITH JSON
const books = require('../data/books')

// data from mongoose
const Book = require('../models/books')

// ------------------------------------------------
// CONTROLLING
// ------------------------------------------------

/*
  GET
  /api/books
*/
let getBooks = (req, res, next) => {
  //req.body.body = /
  //req.params = /params
  //req.query = ?query={value}
  Book.find({}, (err, all_books) => {
    res.json(all_books)
  })

  // var new_book = {
  //   id: Number(req.body.id),
  //   name: req.body.name,
  //   price: Number(req.body.price)
  // }
  // books.push(new_book)
}

let addBook = (req, res, next) => {
  const book = {
    isbn: Number(req.body.isbn),
    name: req.body.name,
    price: Number(req.body.price)
  }

  Book.create(book, (err, new_book) => {
    res.json(new_book)
  })
}

let ping = (req, res, next) => {
  res.send('PONG!')
}

/*
  GET
  /api/books/:id
*/
let getBookById = (req, res, next) => {
  let book = books.filter( (book) => {
    return book.id == req.params.id
  })[0]

  if(!book) res.status(404).json({message: "Data Not Found"})

  res.json(book)
}

/*
  PUT
  /api/books/:id
*/
let updateBookById = (req, res, next) => {
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
}

/*
  DELETE
  /api/books/:id
*/
let deleteBookById = (req, res, next) => {
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
}

module.exports = {
  getBooks: getBooks,
  ping: ping,
  addBook: addBook,
  getBookById: getBookById,
  updateBookById: updateBookById,
  deleteBookById: deleteBookById
}
