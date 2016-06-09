'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var StatDataSchema = new Schema({
  puppy: String,
  count: Number
});

exports.default = _mongoose2.default.model('Statdata', StatDataSchema);
//# sourceMappingURL=statModel.js.map
