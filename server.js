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
const router = app.Router()

// ---------------------------------------------------------------------
// APP CONFIGURATION
// ---------------------------------------------------------------------

// req.body
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser,json())
app.use(cors())
