'use strict';

angular.module('donaloTdpApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/campaigns/list', {
        templateUrl: 'app/main/campaigns/list/list.html',
        controller: 'ListCtrl'
      });
  });
