(function (_, Kotlin) {
  'use strict';
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unit = Kotlin.kotlin.Unit;
  var Error_0 = Kotlin.kotlin.Error;
  var equals = Kotlin.equals;
  function main(args) {
    (new WWW(3333)).startServer();
  }
  function Require() {
    Require_instance = this;
    this.express = require('express');
    this.debug = require('debug')('express-default:server');
    this.http = require('http');
    this.path = require('path');
    this.logger = require('morgan');
    this.cookieParser = require('cookie-parser');
    this.bodyParser = require('body-parser');
  }
  Require.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Require',
    interfaces: []
  };
  var Require_instance = null;
  function Require_getInstance() {
    if (Require_instance === null) {
      new Require();
    }
    return Require_instance;
  }
  function Application() {
    this.app = Require_getInstance().express();
    this.app.set('views', Require_getInstance().path.join(__dirname, 'views'));
    this.app.set('view engine', 'jade');
    this.app.use(Require_getInstance().bodyParser.json());
    this.app.use(Require_getInstance().bodyParser.urlencoded(json([to('extended', false)])));
    this.app.use(Require_getInstance().cookieParser());
    this.app.use(Require_getInstance().express.static(Require_getInstance().path.join(__dirname, 'public')));
    this.app.get('/', Application_init$lambda);
    this.app.get('/users', Application_init$lambda_0);
    this.app.use(Application_init$lambda_1);
    this.app.use(Application_init$lambda_2);
  }
  function Application_init$lambda(f, res, f_0) {
    return res.render('index', json([to('title', 'Express')]));
  }
  function Application_init$lambda_0(f, res, f_0) {
    return res.send('respond with a resource');
  }
  function Application_init$lambda_1(f, f_0, next) {
    return next(json([to('message', 'not found'), to('code', 404)]));
  }
  function Application_init$lambda_2(err, req, res, f) {
    var tmp$;
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : json([]);
    res.status((tmp$ = err.status) != null ? tmp$ : 500);
    return res.render('error');
  }
  Application.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Application',
    interfaces: []
  };
  function WWW(port) {
    if (port === void 0)
      port = 3141;
    this.port_0 = port;
    this.application_0 = new Application();
  }
  function WWW$startServer$lambda(this$WWW) {
    return function (error) {
      this$WWW.onError_0(error);
      return Unit;
    };
  }
  function WWW$startServer$lambda_0(this$WWW) {
    return function () {
      return Require_getInstance().debug('Listening on port ' + this$WWW.port_0);
    };
  }
  WWW.prototype.startServer = function () {
    var server = Require_getInstance().http.createServer(this.application_0.app);
    server.listen(this.port_0);
    server.on('error', WWW$startServer$lambda(this));
    server.on('listening', WWW$startServer$lambda_0(this));
  };
  WWW.prototype.onError_0 = function (error) {
    var tmp$;
    if (error.syscall !== 'listen') {
      throw new Error_0(error.toString());
    }
    tmp$ = error.code;
    if (equals(tmp$, 'EACCES')) {
      console.error('port ' + this.port_0 + ' requires elevated privileges');
      process.exit(1);
    }
     else if (equals(tmp$, 'EADDRINUSE')) {
      console.error('port ' + this.port_0 + ' is already in use');
      process.exit(1);
    }
     else
      throw new Error_0(error.toString());
  };
  WWW.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WWW',
    interfaces: []
  };
  function SmartJSON(param) {
  }
  _.main_kand9s$ = main;
  var package$js = _.js || (_.js = {});
  Object.defineProperty(package$js, 'Require', {
    get: Require_getInstance
  });
  var package$server = _.server || (_.server = {});
  package$server.Application = Application;
  package$server.WWW = WWW;
  var package$smart = _.smart || (_.smart = {});
  package$smart.SmartJSON_o14v8n$ = SmartJSON;
  main([]);
  Kotlin.defineModule('index', _);
  return _;
}(module.exports, require('kotlin')));
