const mongoose = require('mongoose')

const sentenceSchema = mongoose.Schema({
    languagePoint: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LanguagePoint',
        required: true
    },
    sentence: {
        type: String,
        required: true,
    },
    voteCount: {
        type: Number,
        default: 0
    },
    winningCategory: {
        type: String,
        required: false,
        default: null
    },
    language: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Sentence', sentenceSchema)