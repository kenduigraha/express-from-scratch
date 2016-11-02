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
// const router = express.Router()

const router = require('./routes/index')

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

app.use('/', router)


// ---------------------------------------------------------------------
// RUN THE APP
// ---------------------------------------------------------------------

const hostname = process.env.HOST || "localhost"
const port = process.env.PORT || "3000"

app.listen(port, hostname, (err) => {
  if(err) console.log(err)
  console.log(`Server is running on ${hostname}:${port}!`);
})
