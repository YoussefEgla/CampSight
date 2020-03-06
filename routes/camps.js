/**
 *  Required dependencies
 */
const
    express = require('express'),
    router = express.Router();

/**
* Routes
*/
router.route('/')
    .get((req, res) => {
        res.send("List All Camps");
    });

module.exports = router