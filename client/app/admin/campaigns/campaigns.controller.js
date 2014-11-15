'use strict';

angular.module('donaloTdpApp')
  .controller('CampaignsCtrl', function ($scope, $http, Campaign) {

    // Use the Campaign $resource to fetch all users
    $scope.campaigns = Campaign.query();

    $scope.delete = function(user) {
      Campaign.remove({ id: user._id });
      angular.forEach($scope.campaigns, function(u, i) {
        if (u === user) {
          $scope.campaigns.splice(i, 1);
        }
      });
    };

  });
