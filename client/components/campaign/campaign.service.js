'use strict';

angular.module('donaloTdpApp')
  .factory('Campaign', function ($resource) {
    return $resource("/api/campaigns/:id", { id: "@_id" },
        {
          'create':  { method: 'POST' },
          'index':   { method: 'GET', isArray: true },
          'show':    { method: 'GET', isArray: false },
          'update':  { method: 'PUT' },
          'destroy': { method: 'DELETE' }
        }
      );
  });
