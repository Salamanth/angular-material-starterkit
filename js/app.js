// Définition des modules à charger
define([], function() {

  // Définition de l'application
  var app = angular.module('MyApp', ['ngMaterial']);

  // Définition du Controller principal
  app.controller('MyController', function($scope) {
    //
  });

  // Définition du Controller gérant le menu
  app.controller('MenuController', function($scope, $mdSidenav) {
    $scope.openMenu = function () {
      $mdSidenav('right').toggle();
    }
    $scope.linkClick = function (text) {
      $scope.Content = text;
    }
  });

});
