/**
 *  Required dependencies
 */
const
  express = require('express'),
  router = express.Router(),
  passport = require('passport'),
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

router.route('/login')
  .post(passport.authenticate('local', {
    successRedirect: '/camps',
    failureRedirect: '/'
  }))

router.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
  })
module.exports = router;
