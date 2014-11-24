'use strict';

angular.module('donaloTdpApp')
  .controller('DetailsCtrl', function ($scope, $routeParams, Campaign, User) {
    var campaign = Campaign.query({_id: $routeParams.id});
    var user = User.query({_id: campaign.userId});
    $scope.campaign = campaign;
    $scope.user = user;
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  });
