angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('GoalsCtrl', function($scope, $stateParams, $http){

  $scope.goals = [
  {
    name:"Bench Max",
    initial:135,
    current:170,
    target:185
  },
  {
    name:"One Mile Time",
    initial:8,
    // current
    target:6
  },
  {
    name:"Percent Body Fat",
    initial:15.7,
    current:13.9,
    target:12.0
  },
  {
    name:"Free Throw Percentage",
    initial:"40%",
    current:"44%",
    target:"60%"
  },
  {
    name:"Pull Ups",
    initial:10,
    current:10,
    target:20
  }
  ];
           $http.get('https://api.myjson.com/bins/1ib4l').success(function(data) {
             $scope.goals[1].current = data[data.length - 1].Time;

           });

});
