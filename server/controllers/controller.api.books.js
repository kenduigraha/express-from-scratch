//data books
const books = require('../data/books')

let viewBooks = (req, res, next) => {
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
}


module.exports = {
  viewBooks: viewBooks
}
