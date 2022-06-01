/**
 * Module dependencies.
 */
const express = require('express');

/**
 * Express router.
 */
const router = express.Router();

/**
 * Watchlist controller.
 */
const controller = require('../controllers/watchlistController')

/**
 * Auth middleware.
 */
const auth = require('../middlewares/auth')

/**
 * Routes.
 */
router.post('/', auth.check, controller.add)
router.delete('/:movie', auth.check, controller.delete)
router.get('/', auth.check, controller.list)

module.exports = router;
