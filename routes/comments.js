/**
 *  Required dependencies
 */
const
    express = require('express'),
    router = express.Router({ mergeParams: true });

/**
 * Controllers
 */
const
    { addNewComment } = require('../controllers/comments'),
    { usersOnly } = require('../controllers/auth');

/**
* Routes
*/
router.route('/')
    .post(usersOnly, addNewComment);

// this route will be removed and form will be embedded on camp page
router.route('/new')
    .get((req, res) => res.send('Comments Form get route'));




module.exports = router