const mongoose = require('mongoose')

const languagePointSchema = mongoose.Schema({
    languagePoint: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    japaneseName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    englishExample: {
        type: String,
        required: true,
        trim: true
    },
    japaneseExample: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('LanguagePoint', languagePointSchema)