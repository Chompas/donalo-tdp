'use strict';

angular.module('donaloTdpApp')
  .controller('AddcampaignCtrl', function ($scope, $location, Campaign) {
    $scope.errors = {};

    $scope.addCampaign = function(form) {
      $scope.submitted = true;

      if(form.$valid) {

        Campaign.save({
          name: $scope.campaign.name,
          info: $scope.campaign.info,
          campaignType: $scope.campaign.campaignType,
          expires: $scope.campaign.expires,
          active: false,
          totalAmount: $scope.campaign.totalAmount,
          currentAmount: 0,
          created: Date.now()
        }, function() {
          // Account created, redirect to campaign list
          $location.path('admin/campaigns');
        });
      }
    };
  });
