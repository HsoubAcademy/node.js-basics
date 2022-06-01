/**
 * Module dependencies.
 */
const express = require('express');

/**
 * Express router.
 */
const router = express.Router();
 
/**
 * Movies controller.
 */
const controller = require('../controllers/moviesController')

/**
 * Auth middleware.
 */
const auth = require('../middlewares/auth')

/**
 * Admin middleware.
 */
const admin = require('../middlewares/admin')

/**
 * Routes.
 */
router.post('/', [auth.check, admin.check], controller.create)
router.put('/:id', [auth.check, admin.check], controller.update)
router.delete('/:id', [auth.check, admin.check], controller.delete)

router.get('/', auth.check, controller.list)
router.get('/:id', auth.check, controller.find)

router.post('/:id/reviews', auth.check, controller.addReview)
router.get('/:id/reviews', controller.reviews)

module.exports = router;
