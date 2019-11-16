var cors = require('cors');
var path = require('path');
var logger = require('morgan');
var express = require('express');
var compression = require('compression')
var createError = require('http-errors');
var responseTime = require('response-time');
var cookieParser = require('cookie-parser');
var indexRouter = require('./routes/index');

// Start the counter to preodically update the signal color.
require('./services/Signal_State_Manager').counter();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors()); // Allow cross origin request
app.use(compression()) // Conpress the response to gzip
app.use(responseTime()); // Add header to response about the time taken to execute the request
app.use(express.json()); //  It parses incoming requests with JSON payloads and is based on body-parser
app.use(logger('tiny')); // Log the api request 
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../clients/build')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
