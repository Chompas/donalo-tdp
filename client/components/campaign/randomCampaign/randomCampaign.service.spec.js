'use strict';

describe('Service: randomCampaign', function () {

  // load the service's module
  beforeEach(module('donaloTdpApp'));

  // instantiate service
  var randomCampaign;
  beforeEach(inject(function (_randomCampaign_) {
    randomCampaign = _randomCampaign_;
  }));

  it('should do something', function () {
    expect(!!randomCampaign).toBe(true);
  });

});
