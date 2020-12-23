const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const cors = require('cors')


const languagePointRoutes = require('./api/routes/languagePoints')
const sentenceRoutes = require('./api/routes/sentences')
const userRoutes = require('./api/routes/users')

mongoose.set('useCreateIndex', true)
mongoose.connect(
    `mongodb://mileswhitman01:${process.env.MONGO_ATLAS_PW}@cluster0-shard-00-00.ak81c.gcp.mongodb.net:27017,cluster0-shard-00-01.ak81c.gcp.mongodb.net:27017,cluster0-shard-00-02.ak81c.gcp.mongodb.net:27017/test?ssl=true&replicaSet=atlas-18uqmr-shard-0&authSource=admin&retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// Use default node.js promises to prevent deprecation warning
mongoose.Promise = global.Promise

app.use(morgan('dev'))
// Make 'uploads' folder available publicly so images can be viewed via url
app.use('/uploads', express.static('uploads'))
// Allow for extraction of url encoded data
app.use(bodyParser.urlencoded({ extended: false }))
// Allow for extraction and parsing of json data
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use('/languagePoints', languagePointRoutes)
app.use('/sentences', sentenceRoutes)
app.use('/users', userRoutes)

// If above routes are not reached, catch all errors
app.use((req, res, next) => {
    const error = new Error("Not found")
    error.status = 404
    next(error)
})

// Handle above error or any other error thrown in application
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            msg: error.message
        }
    })
})

module.exports = app
