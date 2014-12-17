  'use strict';

  angular.module('donaloTdpApp')
  .controller('ListCtrl', function ($scope, $http, $location, Campaign,uiGmapGoogleMapApi,$timeout) {

    $scope.campaignType = ['Monetaria','Bienes','Voluntarios'];
    
    $scope.go = function ( path ) {
      $location.path( path );
    };

    var maps = [[],[],[]];

    var latlngBounds = [new google.maps.LatLngBounds(),new google.maps.LatLngBounds(),new google.maps.LatLngBounds()];

    uiGmapGoogleMapApi.then(function(maps){

      Campaign.query().$promise.then(function(campaignsData){

        campaignsData.progress = function(campaign){

          return Math.floor((campaign.currentAmount / campaign.totalAmount)*100);
        };

        angular.forEach(campaignsData,function(value){

          $scope[value._id] = {};
        });

        $scope.campaigns = campaignsData;

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
