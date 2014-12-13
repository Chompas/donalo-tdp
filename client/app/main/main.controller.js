'use strict';

angular.module('donaloTdpApp')
  .controller('MainCtrl', function ($scope, $http, RandomCampaign) {
  	$scope.campaigns = [];
  	$scope.campaigns.push(RandomCampaign.randomCampaign({type:0}));
  	$scope.campaigns.push(RandomCampaign.randomCampaign({type:1}));
  	$scope.campaigns.push(RandomCampaign.randomCampaign({type:2}));

    // HARCODED IMAGES!!!!!
    $scope.campaigns[0].imageUrl = "dona_icon3.png";
    $scope.campaigns[1].imageUrl = "dona_icon.png";
    $scope.campaigns[2].imageUrl = "dona_icon2.png";


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
      return "img/" + $scope.campaignImages[campaignType];
    };

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