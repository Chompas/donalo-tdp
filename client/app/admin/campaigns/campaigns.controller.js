'use strict';

angular.module('donaloTdpApp')
  .controller('CampaignsCtrl', function ($scope, $http, Campaign, NavbarSearch) {

    // Use the Campaign $resource to fetch all users
    $scope.campaigns = Campaign.query();

    //$scope.search = NavbarSearch;

    $scope.delete = function(user) {
      Campaign.remove({ id: user._id });
      angular.forEach($scope.campaigns, function(u, i) {
        if (u === user) {
          $scope.campaigns.splice(i, 1);
        }
      });
    };

  });
