var app = angular.module("UpdateApp", []);

app.controller("UpdateController", function($scope, $http) {
  
  $scope.allergic = [['true', '많음'], ['false', '적음']];
  $scope.absent = [['true', '가능'], ['false', '불가능']];
  $scope.active = [['true', '활동적'], ['false', '보통']];
  $scope.single = [['true', '혼자 잘 지냄'], ['false', '외로움을 잘탐']];
  $scope.friendly = [['true', '강함'], ['false', '약함'], ['default', '보통']];
  $scope.inside = [['true', '실내'], ['false', '실외'], ['default', '상관없음']];

  $http.get("/puppies")
    .success(function(response) {
      console.log("response is ", response);
      $scope.puppies = response;
    });


  $scope.select = function(breed) {
    console.log('in select, breed is ', breed);
    $http.get("/puppies/" + breed) 
      .success(function(response) {
        console.log('selected item is ', response);
        $scope.puppy = response;
      })
  };

  $scope.update = function(puppy) {
    console.log("in update: ", puppy._id);
    $http.put("/puppies/" + puppy._id, puppy) 
      .success(function(response) {
        console.log("changed info is ", response);
        $scope.puppies = response;
      });  
  };


})