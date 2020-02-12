var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// new code
const bodyParser = require('body-parser');
const produit = require('./routes/produit.route');

//set up mongoose connection
const mongoose = require('mongoose'); // driver mongoose
//let dev_db_url = 'mongodb://user:password@localhost:27017/db_produits';
let dev_db_url2 ='mongodb://localhost:27017/db_produitions'; // mettre en commtaire
let mongoDB = process.env.MONGODB_URL||dev_db_url2; // mettre url
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error:'));
db.once('open', function(){
  console.log("CONNEDT TO DATABASE !")
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// new code
// bodyParser est un package npm qui permet d'analyser le contenu des requêtes htpp
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/produits',produit);   //new code

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
