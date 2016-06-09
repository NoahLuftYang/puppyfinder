'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var QuestionSchema = new Schema({
  index: String,
  subject: String,
  title: String,
  content: String,
  name: String,
  options: []
}, {
  collection: 'questions'
});

exports.default = _mongoose2.default.model('Question', QuestionSchema);
//# sourceMappingURL=questionModel.js.map
