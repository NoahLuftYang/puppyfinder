'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app, express) {
  app.use((0, _morgan2.default)('dev'));
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use(_bodyParser2.default.json());

  app.use(express.static(__dirname + '/../../client'));
  app.use(express.static(__dirname + '/../../server/admin'));
  app.use(express.static(__dirname + '/../../server/db/images'));
};

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=middleware.js.map
