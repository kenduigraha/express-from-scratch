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

router.get('/pin', (req, res, next) => {
  res.send('PONG!')
})

router.get('books', (req, res, next) => {
  res.json(books)
})

// ---------------------------------------------------------------------
// ROUTING
// ---------------------------------------------------------------------

app.use('/', router)
