'use strict';

angular.module('donaloTdpApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/campaigns/reports', {
        templateUrl: 'app/main/campaigns/reports/reports.html',
        controller: 'ReportsCtrl'
      });
  });
