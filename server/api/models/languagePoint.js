const mongoose = require('mongoose')

const languagePointSchema = mongoose.Schema({
    languagePoint: {
        type: String,
        required: true
    },
    japaneseName: {
        type: String,
        required: true
    },
    englishExample: {
        type: String,
        required: true
    },
    japaneseExample: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('LanguagePoint', languagePointSchema)