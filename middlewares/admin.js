/**
 * Module dependencies.
 */
const User = require('../models/user')

/**
 * Middleware check function.
 */
exports.check = async (req, res, next) => {
    const user = await User.findById(req.userId)
    user.isAdmin ? next() : res.status(403).json({ message: 'Forbidden' })
}