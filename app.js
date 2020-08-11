const myApp = angular.module("myApp", ['ngMessages']);

myApp.controller("header", ($scope, $filter) => {
  $scope.name = $filter("uppercase")("crud")
  $scope.age = 99;
  // console.log($scope)
});

myApp.controller("main", ['$scope', '$timeout', ($scope, $timeout) => {
  $scope.name = "crud you"
  $timeout(() => {
    $scope.name = "Shit Stain"
  }, 2000)
}]);

myApp.controller("myForm", ['$scope', '$filter', ($scope, $filter) => {
  $scope.inputName = ""
  $scope.filteredName = function () {
    return $filter("lowercase")($scope.inputName)
  }

  $scope.cruds = ["dunce", 'fundcer', "dsf;jdsfkl"]

  $scope.theClick = function () {
    alert('Get RECT')
  }
}]);


myApp.controller("starwars", ['$scope', '$http', function ($scope, $http) {
  $scope.planets = null;
  $scope.loading = true;
  $http.get('https://swapi.dev/api/planets')
    .then(({ data }) => {
      $scope.loading = false;
      $scope.planets = data.results;
    })
    .catch(console.log)
}])