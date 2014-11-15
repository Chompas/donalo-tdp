'use strict';

describe('Controller: AddcampaignCtrl', function () {

  // load the controller's module
  beforeEach(module('donaloTdpApp'));

  var AddcampaignCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddcampaignCtrl = $controller('AddcampaignCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
