var app = angular.module("dbmanageApp", []);

app.controller("DbmanageController", function($scope, $http) {
  $scope.mode;

  $scope.allergic = [['true', '많음'], ['false', '적음']];
  $scope.absent = [['true', '가능'], ['false', '불가능']];
  $scope.active = [['true', '활동적'], ['false', '보통']];
  $scope.single = [['true', '혼자 잘 지냄'], ['false', '외로움을 잘탐']];
  $scope.friendly = [['true', '강함'], ['false', '약함'], ['default', '보통']];
  $scope.inside = [['true', '실내'], ['false', '실외'], ['default', '상관없음']];

  $http.get("/puppies")
    .success(function(response) {
      $scope.puppies = response;
    });


  $scope.new = function() {

  }
  $scope.select = function(breed) {
    $http.get("/puppies/" + breed)
      .success(function(response) {
        console.log('Selected puppy: ', response);
        $scope.puppy = response;
      });
  };

  // TODO puppy input 유효한지 체크하기(빈칸 등)
  $scope.update = function(puppy) {
    $http.put("/puppies/" + puppy._id, puppy)
      .success(function(response) {
        console.log("Updated puppy: ", response);
        $scope.puppies = response;
      });
  };
});
