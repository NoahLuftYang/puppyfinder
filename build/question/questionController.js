'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _questionModel = require('../question/questionModel');

var _questionModel2 = _interopRequireDefault(_questionModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = {
  getAllQuestions: function getAllQuestions(req, res) {
    _questionModel2.default.find({}).sort({ index: 1 }).exec(function (err, data) {
      if (err) throw err;else {
        res.status(200).send(data);
      }
    });
  }
};

exports.default = api;
//# sourceMappingURL=questionController.js.map
