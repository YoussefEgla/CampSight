/**
 * Required Modules
 */
const User = require('../models/User'),
    Camp = require('../models/Camp'),
    passport = require('passport');

async function registerUser(req, res, next) {
    await
        User.register(
            new User({
                username: req.body.username
            }), req.body.password
        ).then(createdUser => {
            passport.authenticate('local')(req, res, () => {
                res.redirect('/camps');
            })
        }).catch(err => {
            console.log(err)
            res.redirect('/register');
        })
}

async function usersOnly(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/')
}

async function authorOnly(req, res, next) {
    await Camp.findById(req.params.id).then(foundCamp => {

        if (foundCamp.author.id.equals(req.user._id)) {
            res.locals.isCampAuthor = true;
            next();
        } else {
            res.locals.isCampAuthor = false;
            res.redirect(`/camps/${req.params.id}`)
        }
    })
}

module.exports = { registerUser, usersOnly, authorOnly }