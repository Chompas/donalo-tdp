'use strict';

angular.module('donaloTdpApp')
  .factory('RandomCampaign', function ($resource) {
    var random = $resource("/api/campaigns/type/:type", {},
      {
        'randomCampaign': { method: 'GET', isArray: false}
      }
    );
    return random;
  });