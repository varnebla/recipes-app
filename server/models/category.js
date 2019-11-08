const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Category = new Schema({
  id: {type: Number},
  name: {type: String},
  thumb: {type: String},
});

module.exports = mongoose.model('Category', Category);