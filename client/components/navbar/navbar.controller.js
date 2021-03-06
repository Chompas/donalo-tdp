'use strict';

angular.module('donaloTdpApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, NavbarSearch) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };


    $scope.searchMessage = "Buscar campañas...";
    $scope.data = NavbarSearch;
    $scope.search = function(form) {
      // TODO: Search for campaign
    };
  });