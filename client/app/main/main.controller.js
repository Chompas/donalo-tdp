'use strict';

angular.module('donaloTdpApp')
  .controller('MainCtrl', function ($scope, $http, $location, $modal, RandomCampaign) {
  	$scope.campaigns = [];
  	$scope.campaigns.push(RandomCampaign.randomCampaign({type:0}));
  	$scope.campaigns.push(RandomCampaign.randomCampaign({type:1}));
  	$scope.campaigns.push(RandomCampaign.randomCampaign({type:2}));

    $scope.getWidth = function (campaign) {
      return (campaign.currentAmount / campaign.totalAmount * 100).toFixed(0) + '%';
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
        templateUrl: 'components/donate/donate.html',
        controller: 'DonateCtrl',
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
  });
