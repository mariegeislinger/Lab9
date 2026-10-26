const express = require('express')
const path = require('path')

const indexRouter = require('./routes/index.js')

const app = express()

// Tell Express where the views are located
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// Send requests to the router
app.use('/', indexRouter)

// Start the server
const port = process.env.PORT || 3000

app.listen(port, function() {
    console.log('Server running on port', port)
})