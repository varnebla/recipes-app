const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Ingredient = new Schema({
  id: {type: Number},
  name: {type: String},
  description: {type: String}
});

module.exports = mongoose.model('Ingredient', Ingredient);