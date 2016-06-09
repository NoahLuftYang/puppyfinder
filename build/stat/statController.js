'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _statModel = require('./statModel.js');

var _statModel2 = _interopRequireDefault(_statModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = {
  getStats: function getStats(req, res) {
    _statModel2.default.find().sort({ count: -1 }).exec(function (err, results) {
      if (err) res.send('cannot retrieve data from DB');else {
        res.send(results);
      }
    });
  }
};

exports.default = api;
//# sourceMappingURL=statController.js.map
