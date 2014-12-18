  'use strict';

  angular.module('donaloTdpApp')
  .controller('ListCtrl', function ($scope, $http, $location, Campaign,uiGmapGoogleMapApi,$timeout,$modal) {

    $scope.campaignType = ['Dinero','Materiales','Voluntarios'];

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
