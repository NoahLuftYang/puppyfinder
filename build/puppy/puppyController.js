'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _puppyModel = require('../puppy/puppyModel');

var _puppyModel2 = _interopRequireDefault(_puppyModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = {
  /* GET all puppies in DB */
  getPuppies: function getPuppies(req, res) {
    _puppyModel2.default.find().sort({ total_weight: -1 }).exec(function (err, puppy) {
      if (err) {
        res.send('cannot retrieve data from DB');
      } else {
        res.send(puppy);
      }
    });
  },

  /* GET specific puppy in DB, where breed is breed */
  getPuppiesByBreed: function getPuppiesByBreed(req, res) {
    var breed = req.params.breed;

    _puppyModel2.default.findOne({ breed: breed }).exec(function (err, puppy) {
      if (err) {
        res.send("cannot retreive " + breed);
      } else {
        res.send(puppy);
      }
    });
  },

  /* DELETE a puppy whose breed is breed */
  deletePuppiesByBreed: function deletePuppiesByBreed(req, res) {
    var breed = req.params.breed;

    console.log('To be deleted: ', breed);

    _puppyModel2.default.remove({ breed: breed }, function (err) {
      if (err) {
        console.log('fail to delete' + breed);
      } else {
        _puppyModel2.default.find().sort({ total_weight: -1 }).exec(function (err, puppy) {
          if (err) {
            res.send("cannot retrieve data from DB");
          } else {
            res.send(puppy);
          }
        });
      }
    });
  },

  /* UPDATE a new puppy into puppy DB */
  updatePuppy: function updatePuppy(req, res) {
    _puppyModel2.default.findById(req.params.id, function (err, puppy) {
      if (err) {
        console.error("Cannot update ", req.params.id);
        return null;
      }

      // TODO body에 object 변수로 보내고 받기
      var breedOrigin = puppy.breed;
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
      _puppyModel2.default.findOne({ $and: [{ breed: puppy.breed }, { _id: { $ne: puppy._id } }] }, function (err, pup) {
        if (pup === null || pup === undefined) {
          puppy.save(function (err, puppy) {
            if (err) {
              console.log("Cannot save", puppy);
            } else {
              console.log('Updated puppy: ', puppy);
              _puppyModel2.default.find().sort({ total_weight: -1 }).exec(function (err, ppy) {
                if (err) {
                  res.send('Cannot retrieve data from DB');
                } else {
                  res.send(ppy);
                }
              });
            }
          });
        } else {
          console.log('error: db has already same dog : ', pup);
          res.send("db has already the same breed");
        }
      });
    });
  }
};

exports.default = api;
//# sourceMappingURL=puppyController.js.map
