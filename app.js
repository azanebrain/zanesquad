var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var db = require('./queries');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
// app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(logger('dev'));
app.use(cookieParser());
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

passport.use(new LocalStrategy(db.passportFindUser));
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

// To verify that the endpoint works:
// app.get('/api/v1/companies', function (req, res, next) {
//   res.send('OK!');
// }); 
// To actually hit the DB:
app.get('/api', db.version);
app.get('/api/companies/v1', db.getAllCompanies);
app.post('/api/users/v1/register', db.registerUser);
app.post('/api/coupons/v1', passport.authenticate('local'), db.createCoupon);
app.put('/api/coupons/v1/:couponGuid', passport.authenticate('local'), db.updateCoupon);
app.get('/api/coupons/v1', db.getUsersCoupons);
app.get('/api/users/v1/search', db.getUserByFullName);
app.post('/api/friendrequests/v1', passport.authenticate('local'), db.createFriendRequest);
app.put('/api/friendrequests/v1/:requestGuid/accept', passport.authenticate('local'), db.acceptFriendRequest);
app.put('/api/friendrequests/v1/:requestGuid/decline', passport.authenticate('local'), db.declineFriendRequest);
app.post('/api/users/v1/login', passport.authenticate('local'), db.retrieveUser);
app.get('/api/coupons/v1/:companyGuid', db.getFriendsCouponsByCompany)
app.get('/api/friendrequests/v1', db.getUsersFriendRequests)
app.post('/api/companies/v1', passport.authenticate('local'), db.createCompany);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

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
