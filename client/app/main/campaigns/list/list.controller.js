'use strict';

angular.module('donaloTdpApp')
  .controller('ListCtrl', function ($scope, $http, Campaign) {

    // Use the Campaign $resource to fetch all campaigns
    $scope.campaigns = Campaign.query();
  });
