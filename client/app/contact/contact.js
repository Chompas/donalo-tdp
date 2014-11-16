'use strict';

angular.module('donaloTdpApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contact', {
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl'
      });
  });
