'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var CampaignSchema = new Schema({
  name: String,
  info: String,
  imageUrl: String,
  address: String,
  coords: Object,
  created: Date,
  expires: Date,
  campaignType: Number,
  totalAmount: Number,
  currentAmount: Number,
  active: Boolean,
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});

/*CampaignSchema.pre('save', function (next) {

  var gm = require('geocoder');
  var self = this;
  self.coords = {};
  gm.geocode(self.address, function(err, data) {

    var result = data.results;

    if (result && result[0]){

      self.coords = {latitude: result[0].geometry.location.lat, longitude: result[0].geometry.location.lng};
    }

    next();
  });

});*/

module.exports = mongoose.model('Campaign', CampaignSchema);
