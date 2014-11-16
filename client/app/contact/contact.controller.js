'use strict';

angular.module('donaloTdpApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.contact = function(form) {
    	$scope.message = 'Bye';
    };
  });
