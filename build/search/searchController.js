'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _puppyModel = require('../puppy/puppyModel');

var _puppyModel2 = _interopRequireDefault(_puppyModel);

var _statHelper = require('../stat/statHelper');

var _statHelper2 = _interopRequireDefault(_statHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = {
  // TODO query를 req.body로 보내기
  /* SEARCH and RETURN three matching puppies */
  getResultPuppies: function getResultPuppies(req, res) {
    var url_parts = _url2.default.parse(req.url, true);
    var query = url_parts.query;

    console.log("/search Receieved req: ", query);

    _puppyModel2.default.find().exec(function (err, puppies) {
      if (err) res.send('cannot retrieve data from DB');else {
        var i;

        (function () {
          var resultWeighted = [];
          puppies.forEach(function (val, i) {
            var weight = 0;

            if (val.isUserAllergic.allergic === query.allergic) {
              weight += 10;
            }
            if (val.isUserAbsent.absent === query.absent) {
              weight += 10;
            }
            if (val.isUserActive.active === query.active) {
              weight += 10;
            }
            if (val.isUserSingle.single === query.single) {
              weight += 10;
            }
            if (query.friendly === 'default' || val.isPuppyFriendly.friendly === query.friendly) {
              weight += 10;
            }
            if (val.isPuppyInside.inside === query.inside) {
              weight += 10;
            }

            // 앞: 유저가 설문한 값, 뒤: 강아지 실제 비용
            if (+query.initialCost - val.initialCost.cost) {
              weight += 10;
            }
            if (+query.maintenance - val.maintenance.cost) {
              weight += 10;
            }

            resultWeighted.push([i, weight]);
          });

          resultWeighted = resultWeighted.sort(function (a, b) {
            return b[1] - a[1];
          });

          var matched = resultWeighted.slice(0, 3).map(function (val) {
            return puppies[val[0]];
          });

          for (i = 0; i < matched.length; i++) {
            var val = matched[i];
            console.log(val.isUserAbsent, val.isUserActive, val.isUserAllergic, val.isPuppyFriendly, val.initialCost.cost, val.isPuppyInside, val.maintenance.cost, val.isUserSingle);
          }

          _statHelper2.default.save(matched);

          res.send(matched);
        })();
      }
    });
  }
};

exports.default = api;
//# sourceMappingURL=searchController.js.map
