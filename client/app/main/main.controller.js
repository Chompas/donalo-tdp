'use strict';

angular.module('donaloTdpApp')
  .controller('MainCtrl', function ($scope, $http, $location, $modal, RandomCampaign) {
  	$scope.campaigns = [];
  	$scope.campaigns.push(RandomCampaign.randomCampaign({type:0}));
  	$scope.campaigns.push(RandomCampaign.randomCampaign({type:1}));
  	$scope.campaigns.push(RandomCampaign.randomCampaign({type:2}));

    $scope.getWidth = function (campaign) {
      return (campaign.currentAmount / campaign.totalAmount * 100) + '%';
    }

    $scope.setWidth = function (campaign) {
    	return {width: $scope.getWidth(campaign)};
    };

    $scope.campaignTitles = ['dinero','bienes','materiales'];
    $scope.campaignImages = ['dolar.png','lata.png','hombre.png'];

    $scope.getTitle = function (campaignType) {
    	return "Ver más campañas que necesitan " + $scope.campaignTitles[campaignType];
    };

    $scope.getCampaignImage = function (campaignType) {
      return "assets/images/" + $scope.campaignImages[campaignType];
    };

    $scope.go = function ( path ) {
      $location.path( path );
    };


    $scope.currentCampaignId = "";

    $scope.open = function(campaignId) {
      $scope.currentCampaignId = campaignId;
      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        resolve: {
          campaignId: function () {
            return $scope.currentCampaignId;
          }
        }
      });
    }
  })

  .directive('errSrc', function() {
    return {
      link: function(scope, element, attrs) {
        element.bind('error', function() {
          if (attrs.src != attrs.errSrc) {
            attrs.$set('src', attrs.errSrc);
          }
        });
      }
    }
  })

  .controller('ModalDemoCtrl', function ($scope, $modal, $log) {

  })

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

  .controller('ModalInstanceCtrl', function ($scope, $modalInstance, campaignId, Campaign) {
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
        $modalInstance.close();
      });
    };
  })

