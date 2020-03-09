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
    findAndEditCamp,
    deleteCamp } = require('../controllers/camps');

/**
 * Middleware
 */
const { usersOnly, authorOnly } = require('../controllers/auth')
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
    .put(usersOnly, findAndEditCamp)
    .delete(usersOnly, authorOnly, deleteCamp);

router.route('/:id/edit')
    .get(usersOnly, authorOnly, findCampForEdit)


module.exports = router