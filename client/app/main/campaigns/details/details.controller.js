'use strict';

angular.module('donaloTdpApp')
  .controller('DetailsCtrl', function ($scope, $http, $routeParams, Campaign, User) {

    var campaign = Campaign.show({id: $routeParams.id});
    //$scope.map  = { center: { latitude: 54, longitude: -73 }, zoom: 8 };
    campaign.$promise.then(function(data){
      var expire = new Date(data.expires);
      var now = new Date();
      var diff =  Math.abs(expire - now);
      var directions = (data.address).replace(' ','+');
      var seconds = Math.floor(diff/1000); //ignore any left over units smaller than a second
      var minutes = Math.floor(seconds/60);

      seconds = seconds % 60;
      var hours = Math.floor(minutes/60);
      minutes = minutes % 60;

      if(Math.floor(hours/24)>0) {
        $scope.expire = Math.floor(hours/24) + " dias";
      } else {
        $scope.expire = hours + " horas " + minutes + " minutos ";
      }
      $scope.campaign = data;

      $.getJSON('http://maps.google.com/maps/api/geocode/json?address='+directions, function(data){
        $scope.$apply(function(){
          var location = data.results[0].geometry.location;
          $scope.map  = { center: { latitude: location.lat, longitude: location.lng }, zoom: 18 };
        });
      });

      var user = User.show({id: data.userId});
      user.$promise.then(function(userData){
        $scope.user = userData;
      });
    });
  });
