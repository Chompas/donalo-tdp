'use strict';

angular.module('donaloTdpApp')
  .controller('DetailsCtrl', function ($scope, $routeParams, Campaign, User) {
    var campaigns = Campaign.query({_id: $routeParams.id});
    $scope.campaign = campaigns[0];
    var user = User.query({_id: campaigns[0].userId});
    $scope.user = user[0];
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  });
