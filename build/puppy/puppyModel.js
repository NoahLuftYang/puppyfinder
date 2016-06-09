'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var PuppySchema = new Schema({

  // Default data
  breed: String,
  description: String,
  image: String,
  created_at: {
    type: Date,
    default: Date.now
  },

  // User info
  // Notice that user data only accepts boolean type
  isUserAllergic: {
    allergic: String,
    weight: Number
  },
  isUserAbsent: {
    absent: String,
    weight: Number
  },
  isUserActive: {
    active: String,
    weight: Number
  },
  isUserSingle: {
    single: String,
    weight: Number
  },

  // Puppy info
  isPuppyFriendly: {
    friendly: String,
    weight: Number
  },
  isPuppyInside: {
    inside: String,
    weight: Number
  },
  initialCost: {
    cost: Number,
    weight: Number
  },
  maintenance: {
    cost: Number,
    weight: Number
  },

  // For statistics
  total_weight: Number,
  num_selected: {
    type: Number,
    default: 0
  }
}, {
  collection: 'puppies'
});

exports.default = _mongoose2.default.model('Puppy', PuppySchema);
//# sourceMappingURL=puppyModel.js.map
