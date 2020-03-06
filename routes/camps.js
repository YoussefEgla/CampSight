/**
 *  Required dependencies
 */
const
    express = require('express'),
    router = express.Router();

/**
 * Controllers
 */
const { addNewCamp } = require('../controllers/camps');

/**
* Routes
*/
router.route('/')
    .get((req, res) => {
        res.render('camps')
    })
    .post(addNewCamp, (req, res) => {
        res.redirect('/camps');
    })

router.route('/new')
    .get((req, res) => {
        res.render('addNewCamp')
    })
module.exports = router