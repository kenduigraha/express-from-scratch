'use strict'

// ---------------------------------------------------------------------
// NODE Modules
// ---------------------------------------------------------------------

// Express Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Initiate Express
const app = express()
const router = express.Router()

// ---------------------------------------------------------------------
// APP CONFIGURATION
// ---------------------------------------------------------------------

// req.body
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())


const books = require('./data.js')

console.log(books);


// ---------------------------------------------------------------------
// ROUTING
// ---------------------------------------------------------------------

router.get('/ping', (req, res, next) => {
  res.send('PONG!')
})

router.get('/books', (req, res, next) => {
  res.json(books)
})

// ---------------------------------------------------------------------
// REGISTER ROUTES
// ---------------------------------------------------------------------

app.use('/', router)


// ---------------------------------------------------------------------
// RUN THE APP
// ---------------------------------------------------------------------

const hostname = process.env.HOST || "localhost"
const port = process.env.PORT || 3000

app.listen(port, hostname, (err) => {
  if(err) console.log(err)
  console.log(`Server is running on ${hostname}:${port}`);
})
