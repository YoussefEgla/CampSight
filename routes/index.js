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
    res.render('index', { title: 'Express' });
  });

module.exports = router;
