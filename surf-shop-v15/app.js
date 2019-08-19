const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
//passport
const passport = require('passport');
const passportLocal = require('passport-local');
//Models
const User = require('./models/user')
// routes
const indexRouter = require('./routes/index');
const postRouter = require('./routes/posts');


//DB CONNECTION
mongoose.connect('mongodb://localhost/Surf-Shop', {
 useNewUrlParser: true,
 useCreateIndex: true,
 useFindAndModify: false
})
.then(() => console.log("DB Connected successfully"));


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//==========================
// CONFIGURE PASSPORT AND SESSIONS
// Without express sessions, passport will not work
//==========================

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
 
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//MIDDLEWARE

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')));


//MOUNT ROUTES

app.use('/', indexRouter);
app.use('/posts', postRouter)

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
