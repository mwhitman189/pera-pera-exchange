const express = require('express')
const router = express.Router()

const checkAuth = require('../middleware/check-auth')
const SentencesController = require('../controllers/sentences')


router.get('/recent', SentencesController.sentences_get_recent_winner)

router.get('/:sentenceId', checkAuth, SentencesController.sentences_get_one)

router.delete('/:sentenceId', checkAuth, SentencesController.sentences_delete)

router.get('/', checkAuth, SentencesController.sentences_get_all)

router.post('/', checkAuth, SentencesController.sentences_create_sentence)

module.exports = router
