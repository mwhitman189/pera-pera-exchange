const mongoose = require('mongoose')
const Product = require('../models/languagePoint')

const LANGUAGE_POINTS_URL = 'http://localhost:9000/languagePoints/'


exports.languagePoints_get_all = (req, res, next) => {
    Product.find()
        .select('-__v')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                languagePoints: docs.map(({ _id, languagePoint }) => {
                    return {
                        _id: _id,
                        languagePoint: languagePoint,
                        request: {
                            type: 'GET',
                            url: `${LANGUAGE_POINTS_URL}${_id}`
                        }
                    }
                })
            }
            return res.status(200).json(response)
        })
        .catch(err => {
            return res.status(500).json({ error: err })
        })
}

exports.languagePoints_create = (req, res, next) => {
    const languagePoint = new Product({
        _id: new mongoose.Types.ObjectId,
        languagePoint: req.body.languagePoint
    })
    if (req.file !== undefined) {
        languagePoint.languagePointImage = req.file.path
    }
    languagePoint.save()
        .then(({ _id, languagePoint, price }) => {
            return res.status(201).json({
                msg: "Product successfully added",
                languagePoint: {
                    _id: _id,
                    languagePoint: languagePoint,
                },
                request: {
                    type: 'GET',
                    url: `${LANGUAGE_POINTS_URL}${_id}`
                }
            })
        }).catch(err => {
            return res.status(500).json({ error: err })
        })
}

exports.languagePoints_get_one = (req, res, next) => {
    const id = req.params.languagePointId
    Product.findById(id)
        .select('-__v')
        .exec()
        .then(doc => {
            if (doc) {
                return res.status(200).json({
                    languagePoint: doc,
                    request: {
                        type: 'GET',
                        desc: "GET_ALL_languagePoints",
                        url: LANGUAGE_POINTS_URL
                    }
                })
            } else {
                return res.status(404).json({ msg: `No valid entry was found for ID '${id}'` })
            }
        })
        .catch(err => {
            return res.status(500).json({ error: err })
        })
}

exports.languagePoints_edit = (req, res, next) => {
    const props = req.body
    const userId = req.userData.userId
    const id = req.params.languagePointId
    // Check if the languagePoint with the same user exists
    // Use 'find()' with 'limit()' rather than 'findOne' because 'findOne' returns the doc,
    // slowing query. Find doesn't
    if (Product.find({ _id: id, user: userId }).limit(1)) {
        Product.update({ _id: id }, props)
            .select('-__v')
            .exec()
            .then(doc => {
                return res.status(200).json({
                    msg: "Product updated",
                    request: {
                        type: 'GET',
                        url: `${LANGUAGE_POINTS_URL}${id}`
                    }
                })
            }).catch(err => {
                return res.status(500).json({ error: err })
            })
    } else {
        res.status(403).json({
            message: "You are not authorized to edit this language point"
        })
    }
}

exports.languagePoints_delete = (req, res, next) => {
    const userId = req.userData.userId
    const id = req.params.languagePointId
    // Check if the languagePoint with the same user exists
    Product.exists({ _id: id, user: userId }, (err, result) => {
        if (err) {
            res.status(500).json({
                error: err
            })
        } else if (result) {
            Product.findByIdAndDelete(id)
                .exec()
                .then(result => {
                    return res.status(200).json({
                        msg: "Deletion successful",
                        url: LANGUAGE_POINTS_URL
                    })
                }).catch(err => {
                    return res.status(500).json({ error: err })
                })
        } else {
            res.status(401).json({
                message: "You do not have permission to delete that item"
            })
        }
    })
}