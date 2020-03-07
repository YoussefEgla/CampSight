/**
 *  Required dependencies
 */
const
  express = require('express'),
  router = express.Router(),
  { registerUser } = require('../controllers/auth');

/**
 * Routes
 */
router.route('/')
  .get((req, res) => {
    res.render('index', { title: 'Express' });
  });

// Auth Routes
router.route('/register')
  .get((req, res) => {
    res.render('registerForm')
  })
  .post(registerUser, (req, res) => {
    res.send('Signing up')
  })

module.exports = router;
