var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var agentsRouter = require('./routes/agents');
var gameModesRouter = require('./routes/game-mode');
var mapsRouter = require('./routes/maps');
var weaponsRouter = require('./routes/weapons');
const cors = require('cors');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use((req, res, next) => {
//   const origin = req.headers.origin;
//   const allowed = ['http://localhost:3000', 'http://127.0.0.1:3000'];
//   if (allowed.includes(origin)) {
//     res.header('Access-Control-Allow-Origin', origin);
//     res.header('Vary', 'Origin'); // important for proxies/caches
//   }
//   res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.header('Access-Control-Allow-Credentials', 'true'); // if using cookies/auth
//   if (req.method === 'OPTIONS') return res.sendStatus(204);
//   next();
// });


app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/agents', agentsRouter);
app.use('/game-modes', gameModesRouter);
app.use('/maps', mapsRouter);
app.use('/weapons', weaponsRouter);

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
