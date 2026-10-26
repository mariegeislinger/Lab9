const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index.js')

const app = express()

// Enable parsing of POST request body
app.use(bodyParser.urlencoded({ extended: false }))

// Static files
const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))

// Views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// Routes
app.use('/', indexRouter)

// Start server
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
})