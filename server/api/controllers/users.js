const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

const TOKEN_DURATION = 60 * 60
const refreshTokens = []

exports.users_sign_up = (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length > 0) {
                return res.status(422).json({
                    message: "Email already exists"
                })
            } else {
                // Hash the password with specified number of hashing rounds (e.g. 10)
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(200).json({
                            error: err
                        })
                    } else {
                        const user = new User({
                            username: req.body.username,
                            email: req.body.email,
                            nativeLanguage: req.body.nativeLanguage,
                            password: hash
                        })
                        user.save()
                            .then(result => {
                                res.status(201).json({
                                    message: "User created!"
                                })
                            })
                            .catch(err => {
                                res.status(500).json({
                                    error: err
                                })
                            })
                    }
                })
            }
        })
}

exports.users_log_in = (req, res, next) => {
    const { email, password } = req.body

    User.findOne({ email: email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: "Authentication failed"
                })
            }

            const hashed_pw = user.password
            bcrypt.compare(password, hashed_pw, function (err, result) {
                if (err) {
                    return res.status(401).json({
                        message: "Authentication failed"
                    })
                }
                if (result) {
                    const accessToken = jwt.sign({
                        username: user.username,
                        email: user.email,
                        nativeLanguage: user.nativeLanguage,
                        userId: user._id,
                        expiresIn: TOKEN_DURATION
                    }, process.env.JWT_KEY,
                        {
                            expiresIn: TOKEN_DURATION
                        })

                    const refreshToken = jwt.sign({
                        userId: user._id
                    }, process.env.JWT_REFRESH_KEY)

                    refreshTokens.push(refreshToken)

                    res.cookie('refreshToken', refreshToken, {
                        expires: new Date(Date.now() + 360000000),
                        secure: false, // set to true if your using https
                        httpOnly: true,
                    })

                    return res.status(200).json({
                        message: "Authentication successful!",
                        accessToken: accessToken,
                    })
                }
                res.status(401).json({
                    message: "Authentication failed"
                })
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "Login failed"
            })
        })
}

exports.users_refresh_token = (req, res, next) => {
    const refreshToken = req.cookies.refreshToken || ''

    if (!refreshToken) {
        return res.status(401).json({
            message: "No token present"
        })
    }

    if (!refreshTokens.includes(refreshToken)) {
        return res.status(403).json({
            message: "Unauthorized action"
        })
    }

    jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
        if (err) {
            res.status(403).json({
                error: err
            })
        }

        const accessToken = jwt.sign({
            username: user.username,
            email: user.email,
            nativeLanguage: user.nativeLanguage,
            userId: user._id,
            expiresIn: TOKEN_DURATION
        }, process.env.JWT_KEY,
            {
                expiresIn: '1h'
            })

        const refreshToken = jwt.sign({
            username: user.username,
            email: user.email,
            nativeLanguage: user.nativeLanguage,
            userId: user._id,
        }, process.env.JWT_REFRESH_KEY)

        refreshTokens.push(refreshToken)

        res.cookie('refreshToken', refreshToken, {
            domain: 'http://localhost:3000',
            expires: new Date(Date.now() + 360000000),
            secure: false, // set to true if your using https
            httpOnly: true,
        })

        res.status(200).json({
            token: accessToken
        })
    })
}

exports.users_log_out = (req, res, next) => {
    const { token } = req.body
    refreshTokens = refreshTokens.filter(t => t !== token)

    res.status(200).json({
        message: "User successfully logged out"
    })
}

exports.users_delete_token = (req, res, next) => {
    User.deleteOne({ _id: req.params.userId })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "User deleted"
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

exports.users_get_all = (req, res, next) => {
    User.find()
        .select('-__v -password')
        .exec()
        .then(users => {
            res.status(200).json({
                users: users
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}
