'use strict';

angular.module('donaloTdpApp')
  .controller('DonateCtrl', function ($scope, $modalInstance, $location, campaignId, Campaign) {
    $scope.campaignId = campaignId;
    $scope.ok = function () {
      $scope.donate($scope.campaignId);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    $scope.donate = function() {
      var campaign = Campaign.show({id:$scope.campaignId});
      campaign.$promise.then(function(data){
        var newCurrentAmount = parseInt($scope.donationAmount) + parseInt(data.currentAmount);
        Campaign.update({id:$scope.campaignId},{currentAmount:newCurrentAmount});
        $location.path( '' );
        $modalInstance.close();
      });
    };
  });