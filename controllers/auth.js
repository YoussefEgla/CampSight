/**
 * Required Modules
 */
const User = require('../models/User'),
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

module.exports = { registerUser, usersOnly }