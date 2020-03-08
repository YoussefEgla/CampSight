/**
 * Required Dependencies
 */
require('dotenv').config();
const
  path = require('path'),
  logger = require('morgan'),
  createError = require('http-errors'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  express = require('express'),
  session = require('express-session'),
  passport = require('passport'),
  LocalStrategy = require('passport-local'),
  User = require('./models/User');

/**
 * Server Instance
 */
const server = express();

/**
 * Database configuration
 */
mongoose.connect('mongodb://localhost/campsight', { useNewUrlParser: true, useUnifiedTopology: true });

/**
 * Configuration
 */
// global middleware
server.use(
  logger('dev'),
  express.json(),
  cookieParser(),
  bodyParser.urlencoded({ extended: true })
);

/**
 * Authentication Configuration
 */
server.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
server.use(passport.initialize());
server.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/**
 * Auth specific Middleware
 */
const { isLoggedIn } = require('./middleware/auth')
server.use(isLoggedIn);


// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');


/**
 * Public Directories
 */
// Main Public directory
server.use(express.static(path.join(__dirname, 'public')));
// bootstrap
server.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
server.use('/js/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
// jQuery
server.use('/js/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
// popper.js
server.use('/js/popper', express.static(__dirname + '/node_modules/@popperjs/core/dist/umd'));


/**
 * Routing
 */
server.use('/', require('./routes/index'));
server.use('/camps', require('./routes/camps'));
server.use('/camps/:id/comment', require('./routes/comments'));


/**
 * Error Handling
 */
// catch 404 and forward to error handler
server.use((req, res, next) => {
  next(createError(404));
});

// error handler
server.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = server;
