var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer  = require("multer");

var indexRouter = require('./routes/index');
var collectionRouter = require('./routes/collection');
var contactRouter = require('./routes/contact');
var usersRouter = require('./routes/users');
var canvasRouter = require('./routes/canvas');
var uploadRouter = require('./routes/upload');

var app = express();

const upload = multer({dest:"uploads"});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/collection', collectionRouter);
app.use('/contact', contactRouter);
app.use('/users', usersRouter);
app.use('/canvas', canvasRouter);
app.post('/upload', uploadRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
