/**
 * Required Dependencies
 */
require('dotenv').config();
const
  path = require('path'),
  logger = require('morgan'),
  createError = require('http-errors'),
  cookieParser = require('cookie-parser'),
  express = require('express');


/**
 * Server Instance
 */
const server = express();


/**
 * Configuration
 */
// global middleware
server.use(
  logger('dev'),
  express.json(),
  cookieParser(),
  express.urlencoded({ extended: true }),

);

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
server.use('/js/popper', express.static(__dirname + '/node_modules/popper.js/dist/'));


/**
 * Routing
 */
server.use('/', require('./routes/index'));
server.use('/camps', require('./routes/camps'));


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
