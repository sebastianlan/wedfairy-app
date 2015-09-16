var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var settings = require('./settings/settings');

var map = require('./routes/map');

var app = express();


// view engine setup
app.set('env', settings.ENV);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// local vars
app.locals.static_url = '/public/';
app.locals.cdn_url = settings.CDN_URL;
app.locals.api_root = settings.API_ROOT;
app.locals.tat_static = settings.TAT_STATIC;
app.locals.composer_host = settings.COMPOSER_HOST;
app.locals.vu_api_root = settings.VU_API_ROOT;

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, 'public'), {
    maxAge: app.get('env') === 'development' ? 0 : 86400000
}));

app.use('/map', map);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        status: err.status || 500,
        stack: err.stack
    });
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var debug = require('debug')('wedfairy_app'); // debug模块
app.set('port', process.env.PORT || 3000); // 设定监听端口

// Environment sets...

// module.exports = app; 这是 4.x 默认的配置，分离了 app 模块,将它注释即可，上线时可以重新改回来

//启动监听
var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
});

module.exports = app;
