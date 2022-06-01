/**
 * Module dependencies.
 */
const User = require('../models/user')

/**
 * Add/Update movie in user's watchlist
 * @param req 
 * @param res 
 */
exports.add = async (req, res) => {
    const { movie, watched } = req.body
    const user = await User.findById(req.userId)
    const index = user.watchList.findIndex(e => e.movie == movie)

    if (index > -1) {
        user.watchList[index].watched = watched
    } else { 
        user.watchList.push({ movie, watched })
    }
    await user.save()

    res.json({
        success: true
    })
}

/**
 * Delete movie from user's watchlist
 * @param req 
 * @param res 
 */
exports.delete = async (req, res) => {
    const { movie } = req.params
    const user = await User.findById(req.userId)
    user.watchList = user.watchList.filter(e => e.movie != movie)
    await user.save()
    res.json({
        success: true
    })
}

/**
 * List all movies in user's watchlist
 * @param req 
 * @param res 
 */
exports.list = async (req, res) => {
    const user = await User.findById(req.userId).select('-watchList._id')
        .populate('watchList.movie', ['name', 'category'])
    res.json({
        success: true,
        data: user.watchList
    })
}