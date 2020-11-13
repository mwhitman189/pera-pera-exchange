const mongoose = require('mongoose')

const sentenceSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Sentence', sentenceSchema)