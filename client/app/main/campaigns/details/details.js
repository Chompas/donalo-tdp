'use strict';

angular.module('donaloTdpApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/campaigns/details/:id', {
        templateUrl: 'app/main/campaigns/details/details.html',
        controller: 'DetailsCtrl'
      });
  });
