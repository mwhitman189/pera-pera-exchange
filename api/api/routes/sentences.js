const express = require('express')
const router = express.Router()

const checkAuth = require('../middleware/check-auth')
const SentencesController = require('../controllers/sentences')


router.get('/', checkAuth, SentencesController.sentences_get_all)

router.post('/', checkAuth, SentencesController.sentences_create_sentence)

router.get('/:orderId', checkAuth, SentencesController.sentences_get_one)

router.delete('/:orderId', checkAuth, SentencesController.sentences_delete)

module.exports = router