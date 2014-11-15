'use strict';

angular.module('donaloTdpApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/admin', {
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      })
      .when('/admin/users', {
        templateUrl: 'app/admin/users/users.html',
        controller: 'UsersCtrl'
      })
      .when('/admin/campaigns', {
        templateUrl: 'app/admin/campaigns/campaigns.html',
        controller: 'CampaignsCtrl'
      })
      .when('/admin/addCampaign', {
        templateUrl: 'app/admin/addCampaign/addcampaign.html',
        controller: 'AddcampaignCtrl'
      });
  });
