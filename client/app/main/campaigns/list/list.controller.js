  'use strict';

  angular.module('donaloTdpApp')
  .controller('ListCtrl', function ($scope, $http, Campaign,uiGmapGoogleMapApi,$timeout) {

    $scope.campaignType = ['Monetaria','Bienes','Voluntarios'];

    var maps = [[],[],[]];

    var latlngBounds = [new google.maps.LatLngBounds(),new google.maps.LatLngBounds(),new google.maps.LatLngBounds()];

    uiGmapGoogleMapApi.then(function(maps){

      Campaign.query().$promise.then(function(campaignsData){

        campaignsData.progress = function(campaign){

          return (campaign.currentAmount / campaign.totalAmount)*100;
        };

        var bounds = [];
        var markers = [];

        angular.forEach(campaignsData,function(campaignValue,campaignKey){

          if (!(campaignValue.campaignType in bounds)){

            bounds[campaignValue.campaignType] = new google.maps.LatLngBounds();
            markers[campaignValue.campaignType] = [];
          }

          var latlng = new google.maps.LatLng(campaignValue.coords.latitude, campaignValue.coords.longitude);

          bounds[campaignValue.campaignType].extend(latlng);

          markers[campaignValue.campaignType].push( {
            coords:{
              latitude: campaignValue.coords.latitude,
              longitude: campaignValue.coords.longitude
            },
            id: 'marker-'+ campaignKey
          });

        });

        $scope.markers = markers;

        $scope.campaigns = campaignsData;

        var map = [];
        angular.forEach($scope.campaignType,function(value,key){

          if ((key in bounds)){
            map[key] = {center: { latitude: bounds[key].getCenter().lat(), longitude: bounds[key].getCenter().lng() }, zoom: 10};

          }

        });

        $scope.maps = map;

        $scope.active = function(index){

          $timeout(function(){
            var mapa = angular.element(document.querySelector('#maps-'+ index + ' .angular-google-map')).scope().map;

            if (mapa){

              google.maps.event.trigger(mapa, 'resize');
              mapa.setCenter(new google.maps.LatLng($scope.maps[index].center.latitude,$scope.maps[index].center.longitude));
            }
          });
        }
      });

    });

  });
