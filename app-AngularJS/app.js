var app = angular.module('app', ['ui.router'])
  .controller("HomeController", ['$scope', function($scope) {
    $scope.title = "Home";
      console.log("HomeController");
  }])
  .controller("AboutController", ['$scope', function($scope) {
    $scope.title = "Home";
    console.log("AboutController");
  }])
  .controller("ContactController", ['$scope', function($scope) {
    $scope.title = "Home";
      console.log("ContactController");
  }])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      template: '<h2>Home</h2>',
      controller: 'HomeController'
    })
    .state('about', {
      url: '/about',
      template: '<h2>About</h2>',
      controller: 'AboutController'
    })
    .state('contact', {
      url: '/contact',
      template: '<h2>Contact</h2>',
      controller: 'ContactController'
    });
}]);
