'use strict';

angular.module('donaloTdpApp')
  .controller('MainCtrl', function ($scope, $http, RandomCampaign) {
  	$scope.campaigns = [];
	$scope.campaigns.push(RandomCampaign.randomCampaign({type:0}));
	$scope.campaigns.push(RandomCampaign.randomCampaign({type:1}));
	$scope.campaigns.push(RandomCampaign.randomCampaign({type:2}));

        //    span {{(campaign.currentAmount) / campaign.totalAmount * 100 | number:0}}% Complete
    $scope.setWidth = function (campaign) {
    	$scope.campaignWidth = (campaign.currentAmount / campaign.totalAmount * 100);
    	$scope.campaignWidth = $scope.campaignWidth + '%';
    	return {width: $scope.campaignWidth};
    };

    $scope.campaignTitles = ['Tipo 0','Tipo 1','Tipo 2'];

    $scope.getTitle = function (campaignType) {
    	return $scope.campaignTitles[campaignType];
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