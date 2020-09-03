"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema();
var musicSchema = new Schema({
  artist: {
    type: String,
    id: Number
  }
});