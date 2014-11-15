'use strict';

angular.module('donaloTdpApp')
  .controller('AddcampaignCtrl', function ($scope, Campaign) {
    $scope.errors = {};

    $scope.addCampaign = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Campaign.save({
          name: $scope.campaign.name,
          info: $scope.campaign.info,
          campaignType: $scope.campaign.campaignType,
          expired: $scope.campaign.expires,
          active: false,
          totalAmount: $scope.campaign.totalAmount,
          currentAmount: 0,
          created: Date.now()
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };
  });
