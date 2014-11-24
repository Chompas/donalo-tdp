'use strict';

angular.module('donaloTdpApp')
  .controller('MainCtrl', function ($scope, $http, RandomCampaign) {
  	$scope.campaigns = [];
	$scope.campaigns.push(RandomCampaign.randomCampaign({type:0}));
	$scope.campaigns.push(RandomCampaign.randomCampaign({type:1}));
	$scope.campaigns.push(RandomCampaign.randomCampaign({type:2}));
  });
