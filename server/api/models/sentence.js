const mongoose = require('mongoose')

const sentenceSchema = mongoose.Schema({
    languagePoint: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LanguagePoint',
        required: true,
        trim: true
    },
    sentence: {
        type: String,
        required: true,
        trim: true
    },
    voteCount: {
        type: Number,
        default: 0,
        trim: true
    },
    winningCategory: {
        type: String,
        required: false,
        default: null,
        trim: true
    },
    language: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        trim: true
    },
}, { timestamps: true })

module.exports = mongoose.model('Sentence', sentenceSchema)
