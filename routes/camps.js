/**
 *  Required dependencies
 */
const
    express = require('express'),
    router = express.Router();

/**
 * Controllers
 */
const { getAllCamps, addNewCamp, findOneCamp } = require('../controllers/camps');

/**
* Routes
*/
router.route('/')
    .get(getAllCamps)
    .post(addNewCamp)

router.route('/new')
    .get((req, res) => {
        res.render('newCampForm')
    });

router.route('/:id')
    .get(findOneCamp)


module.exports = router