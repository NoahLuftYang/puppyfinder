'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app, express) {
  // TODO single page로 합치기
  // 권한 인증하기
  // input validation
  // add.js <-> upload.html 파일명 통일하기
  app.get('/admin', _adminController2.default.getAdminPage);
  app.get('/dbmanage', _adminController2.default.getDbManagePage);
  app.get('/stat', _adminController2.default.getStatPage);
  app.get('/statjson', _statController2.default.getStats);
  /*
   * SHOWS the result after admin user INSERTS puppy data via admin page
   * The reason POST is used is that we want to hide parameters at the end of url
   */
  app.post('/result', _adminController2.default.insertPuppy);

  app.get('/puppies', _puppyController2.default.getPuppies);
  app.get('/puppies/:breed', _puppyController2.default.getPuppiesByBreed);
  app.delete('/puppies/:breed', _puppyController2.default.deletePuppiesByBreed);
  app.put('/puppies/:id', _puppyController2.default.updatePuppy);

  // question list 가져오기
  app.get('/questions', _questionController2.default.getAllQuestions);

  // TODO query를 req.body로 보내기
  /* SEARCH and RETURN three matching puppies */
  app.get('/search', _searchController2.default.getResultPuppies);

  app.get('/daum', function (req, res) {
    var url_parts = _url2.default.parse(req.url, true);
    var query = url_parts.query;
    // console.log(query);
    (0, _request2.default)({
      method: 'GET',
      url: encodeURI('https://apis.daum.net/search/image?apikey=0a82237676f6eb236ee760a0912ec05f&q=' + query.q + '&result=20&output=json')
      // url: encodeURI('https://www.googleapis.com/customsearch/v1?q='+query.q +'&cx=007711437540587242288%3A1tx-m0h4ejq&imgType=photo&searchType=image&key=AIzaSyAIrtttKYKEIsLA1sdftk50R3xj3a5krvM')
    }, function (error, response, body) {
      if (error) {
        // console.log(error);
        res.send(404);
      } else {
        // console.log('BODY', body);
        res.send(body);
      }
    });
  });
};

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _adminController = require('../admin/adminController');

var _adminController2 = _interopRequireDefault(_adminController);

var _puppyModel = require('../puppy/puppyModel');

var _puppyModel2 = _interopRequireDefault(_puppyModel);

var _puppyController = require('../puppy/puppyController');

var _puppyController2 = _interopRequireDefault(_puppyController);

var _questionController = require('../question/questionController');

var _questionController2 = _interopRequireDefault(_questionController);

var _searchController = require('../search/searchController');

var _searchController2 = _interopRequireDefault(_searchController);

var _statController = require('../stat/statController');

var _statController2 = _interopRequireDefault(_statController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=routes.js.map
