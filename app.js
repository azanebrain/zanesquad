var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var db = require('./queries');

var app = express();

app.use(bodyParser.json());
// app.use(bodyParser.json({ type: 'application/*+json' }))

// To verify that the endpoint works:
// app.get('/api/v1/companies', function (req, res, next) {
//   res.send('OK!');
// }); 
// To actually hit the DB:
app.get('/api', db.version);
app.get('/api/v1/companies', db.getAllCompanies);
app.post('/api/users/v1/register', db.registerUser);
app.post('/api/coupons/v1', db.createCoupon);
app.put('/api/coupons/v1/:couponGuid', db.updateCoupon);
app.get('/api/coupons/v1', db.getUsersCoupons);
app.get('/api/users/v1/search', db.getUserByFullName);
app.post('/api/friendrequests/v1', db.createFriendRequest);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
