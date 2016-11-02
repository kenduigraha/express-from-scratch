'use strict'

// CONFIG
require('dotenv').config()

// ---------------------------------------------------------------------
// NODE Modules
// ---------------------------------------------------------------------

// Express Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Initiate Express
const app = express()
// const router = express.Router()

// ---------------------------------------------------------------------
// APP MODULES
// ---------------------------------------------------------------------
const routesBooks = require('./routes/books')

// ---------------------------------------------------------------------
// MONGOOSE CONFIGURATION
// ---------------------------------------------------------------------
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

// ---------------------------------------------------------------------
// APP CONFIGURATION
// ---------------------------------------------------------------------

// req.body
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

// ---------------------------------------------------------------------
// REGISTER ROUTES
// ---------------------------------------------------------------------

app.use('/books', routesBooks)


// ---------------------------------------------------------------------
// RUN THE APP
// ---------------------------------------------------------------------

const hostname = process.env.HOST || "localhost"
const port = process.env.PORT || "3000"

app.listen(port, hostname, (err) => {
  if(err) console.log(err)
  console.log(`Server is running on ${hostname}:${port}!`);
})
