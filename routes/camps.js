/**
 *  Required dependencies
 */
const
    express = require('express'),
    router = express.Router();

/**
 * Controllers
 */
const {
    getAllCamps,
    addNewCamp,
    findOneCamp,
    findCampForEdit,
    findAndEditCamp } = require('../controllers/camps');

/**
 * Middleware
 */
const { usersOnly } = require('../controllers/auth')
/**
* Routes
*/
router.route('/')
    .get(getAllCamps)
    .post(addNewCamp)

router.route('/new')
    .get(usersOnly, (req, res) => {
        res.render('newCampForm')
    });

router.route('/:id')
    .get(findOneCamp)
    .put(findAndEditCamp);

router.route('/:id/edit')
    .get(findCampForEdit)


module.exports = router