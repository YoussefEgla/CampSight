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
    .put(findAndEditCamp)
    .delete(deleteCamp);

router.route('/:id/edit')
    .get(findCampForEdit)


module.exports = router