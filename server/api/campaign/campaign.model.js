'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CampaignSchema = new Schema({
  name: String,
  info: String,
  imageUrl: String,
  address: String,
  created: Date,
  expires: Date,
  campaignType: Number,
  totalAmount: Number,
  currentAmount: Number,
  active: Boolean
});

module.exports = mongoose.model('Campaign', CampaignSchema);
