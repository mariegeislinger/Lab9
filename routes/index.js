const express = require('express')
const router = express.Router()

// Home page
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Feedback Application',
        author: 'Marie',
        timePageLoadedAt: new Date().toLocaleString()
    })
})

// Student feedback form page
router.get('/student-feedback-form', function(req, res, next) {
    res.render('student_feedback_form')
})

// Submit feedback
router.post('/submit-feedback', function(req, res, next) {
    const formData = req.body
    console.log(formData)

    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent: formData['current-student'] || 'No'
    })
})

module.exports = router