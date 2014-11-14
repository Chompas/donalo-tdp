'use strict';

describe('Service: campaign', function () {

  // load the service's module
  beforeEach(module('donaloTdpApp'));

  // instantiate service
  var campaign;
  beforeEach(inject(function (_campaign_) {
    campaign = _campaign_;
  }));

  it('should do something', function () {
    expect(!!campaign).toBe(true);
  });

});
