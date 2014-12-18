'use strict';

angular.module('donaloTdpApp')
  .controller('DetailsCtrl', function ($scope, $http, $routeParams, Campaign, User, $modal, $location) {

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

      $scope.marker = {}
      
      $scope.infowindow = new google.maps.InfoWindow({content: campaign.address});

      $scope.marker.events = {
        'click' : function(marker,eventName,args){

          var scope = angular.element('.angular-google-map-container').scope();

          if (!$scope.infowindow.isOpen()){

            $scope.infowindow.open(scope.map,marker);
          }else{

            $scope.infowindow.close();
          }
        }
      }

      $scope.campaign = data;
      var campaignType = ['Dinero','Materiales','Voluntarios'];
      $scope.campaign.tipo = campaignType[data.campaignType];
      $scope.map = {center: { latitude: data.coords.latitude, longitude: data.coords.longitude }, zoom: 15, options: {draggable: false}};

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
      }

      $scope.go= function(path){

        $location.path(path);
      }

      $scope.getWidth = function (campaign) {
        return (campaign.currentAmount / campaign.totalAmount * 100).toFixed(0) + '%';
      }

      $scope.setWidth = function (campaign) {
        return {width: $scope.getWidth(campaign)};
      };

    });
  });
