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
  active: Boolean,
  userId: Number
});

module.exports = mongoose.model('Campaign', CampaignSchema);
