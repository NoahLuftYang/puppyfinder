'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _statModel = require('./statModel');

var _statModel2 = _interopRequireDefault(_statModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = {
  save: function save(topThree) {
    for (var key in topThree) {
      var puppy = topThree[key].breed;
      _statModel2.default.update({ puppy: puppy }, { $inc: { count: 1 } }, { upsert: true }, function (err, raw) {
        if (err) return console.error(err);
        console.log('raw response: ', raw);
      });
    }
  }
};

exports.default = api;
//# sourceMappingURL=statHelper.js.map
