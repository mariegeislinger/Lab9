const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index.js')

// Import the API routes from routes/api.js
const apiRouter = require('./routes/api.js')

const app = express()

// Enable parsing of POST request body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

// Static files
const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))

// Views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// Main routes
app.use('/', indexRouter)

// API routes
app.use('/api', apiRouter)

// Start server
const port = process.env.PORT || 3000

const server = app.listen(port, function() {
    console.log('Express server running on port', port)
})