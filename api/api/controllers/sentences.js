const mongoose = require('mongoose')

const Sentence = require('../models/sentence')
const LanguagePoint = require('../models/languagePoint')

const SENTENCES_URL = 'http://localhost:9000/sentences/'

exports.sentences_get_all = (req, res, next) => {
    Sentence.find()
        .select('-__v')
        .exec()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                sentences: docs.map(doc => {
                    return {
                        _id: doc._id,
                        languagePoint: doc.languagePoint,
                        voteCount: doc.voteCount,
                        request: {
                            type: 'GET',
                            url: SENTENCES_URL + doc._id
                        }
                    }
                })
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

exports.sentences_create_sentence = (req, res, next) => {
    LanguagePoint.findById(req.body.languagePointId)
        .then(languagePoint => {
            console.log(languagePoint)
            if (!languagePoint) {
                return res.status(404).json({
                    msg: "LanguagePoint was not found",

                })
            }
            const sentence = new Sentence({
                _id: mongoose.Types.ObjectId(),
                languagePoint: req.body.languagePointId,
                voteCount: req.body.voteCount,
                user: req.userData.userId
            })
            console.log(sentence)
            sentence.save()
                .then(result => {
                    res.status(201).json({
                        msg: "Sentence stored",
                        request: {
                            type: 'GET',
                            createdSentence: {
                                _id: result._id,
                                languagePoint: result.languagePoint,
                                voteCount: result.voteCount,
                                user: result.user
                            },
                            url: SENTENCES_URL + result._id
                        }
                    })
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({
                        error: err
                    })
                })
        })
}

exports.sentences_get_one = (req, res, next) => {
    Sentence.findById(req.params.sentenceId)
        .exec()
        .then(sentence => {
            if (!sentence) {
                return res.status(404).json({
                    msg: "Sentence was not found"
                })
            }
            res.status(200).json({
                sentence: sentence,
                request: {
                    type: 'GET',
                    url: SENTENCES_URL
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err,
            })
        })
}

exports.sentences_delete = (req, res, next) => {
    Sentence.remove({ _id: req.params.sentenceId })
        .exec()
        .then(result => {
            res.status(200).json({
                msg: "Sentence was successfully deleted",
                request: {
                    type: 'GET',
                    url: SENTENCES_URL,
                    body: { languagePointId: 'ID', voteCount: 'Number' }
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}