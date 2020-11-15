const mongoose = require('mongoose')

const languagePointSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    languagePoint: {
        type: String,
        required: true
    },
    japaneseName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('LanguagePoint', languagePointSchema)