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

      data.percentageAmount = function(){

        return (this.currentAmount/this.totalAmount)*100;
      }

      $scope.campaign = data;
      $scope.map = {center: { latitude: data.coords.latitude, longitude: data.coords.longitude }, zoom: 15};

    });
  });
