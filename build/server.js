'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _middleware = require('./config/middleware.js');

var _middleware2 = _interopRequireDefault(_middleware);

var _routes = require('./config/routes.js');

var _routes2 = _interopRequireDefault(_routes);

var _init = require('./config/init');

var _init2 = _interopRequireDefault(_init);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = process.env.PORT || 3000;

/* Initialize DB */

(0, _init2.default)();

(0, _middleware2.default)(app, _express2.default);
(0, _routes2.default)(app, _express2.default);

app.listen(port, function () {
  console.log('Express listening on port', port);
});

exports.default = app;
//# sourceMappingURL=server.js.map
