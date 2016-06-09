'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _puppyModel = require('../puppy/puppyModel');

var _puppyModel2 = _interopRequireDefault(_puppyModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = {
  getAdminPage: function getAdminPage(req, res) {
    res.sendFile('admin.html', { root: './server/admin' });
  },

  getDbManagePage: function getDbManagePage(req, res) {
    res.sendFile('dbmanage.html', { root: './server/admin' });
  },

  getStatPage: function getStatPage(req, res) {
    res.sendFile('stat.html', { root: './server/admin' });
  },

  insertPuppy: function insertPuppy(req, res) {
    var puppy = new _puppyModel2.default();

    // Create a new db document
    puppy.breed = req.body.breed;
    puppy.description = req.body.description;
    puppy.image = req.body.image;
    puppy.isUserAllergic.allergic = req.body.isUserAllergic.allergic;
    puppy.isUserAbsent.absent = req.body.isUserAbsent.absent;
    puppy.isUserActive.active = req.body.isUserActive.active;
    puppy.isUserSingle.single = req.body.isUserSingle.single;
    puppy.isPuppyFriendly.friendly = req.body.isPuppyFriendly.friendly;
    puppy.isPuppyInside.inside = req.body.isPuppyInside.inside;
    puppy.initialCost.cost = req.body.initialCost.cost;
    puppy.maintenance.cost = req.body.maintenance.cost;

    _puppyModel2.default.findOne({ breed: puppy.breed }, function (err, pup) {
      if (err) res.send("error finding duplicated puppy whiie saving new puppy");
      if (pup === null) {
        puppy.save(function (err, puppy) {
          if (err) res.send("error saving new puppy");else {
            res.send(puppy);
          }
        });
      } else {
        res.send("error: db has already the same breed");
      }
    });
  }
};

exports.default = api;
//# sourceMappingURL=adminController.js.map
