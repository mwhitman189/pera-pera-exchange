const express = require('express')
const router = express.Router()

const checkAuth = require('../middleware/check-auth')

const LanguagePointsController = require('../controllers/languagePoints')


router.get('/', LanguagePointsController.languagePoints_get_all)

router.post('/', checkAuth, LanguagePointsController.languagePoints_create)

router.get('/:languagePointId', LanguagePointsController.languagePoints_get_one)

router.patch('/:languagePointId', checkAuth, LanguagePointsController.languagePoints_edit)

router.delete('/:languagePointId', checkAuth, LanguagePointsController.languagePoints_delete)

module.exports = router