
async function isLoggedIn(req, res, next) {
    res.locals.loggedInUser = req.user
    next();
}

module.exports = { isLoggedIn }