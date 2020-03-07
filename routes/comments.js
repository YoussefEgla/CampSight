/**
 *  Required dependencies
 */
const
    express = require('express'),
    router = express.Router({ mergeParams: true });

/**
 * Controllers
 */
const { addNewComment } = require('../controllers/comments');

/**
* Routes
*/
router.route('/')
    .post(addNewComment, (req, res) => res.send('You have posted a new comment'));

// this route will be removed and form will be embedded on camp page
router.route('/new')
    .get((req, res) => res.send('Comments Form get route'));




module.exports = router