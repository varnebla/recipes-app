const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const difficultLevel = ['Easy','Normal','Difficult']

const Meal = new Schema({
  idMeal: {type: Number},
  name: {type: String},
  instructions: {type: String},
  mealThumb: {type: String},
  tags: [{
    tag: {type:String},
    }
  ],
  youtube: {type: String},
  ingredients: [{
    id: {type: Number},
    quantity: {type: String}
  }],
  categories:[{
    id:{type: Number}
  }],
  time: {type: Number, default: Math.ceil(randomNumber(15,120)/5)*5},
  difficulty: {type:String, default: difficultLevel[randomNumber(0,2)]}
});

function randomNumber(min, max) {  
  min = Math.ceil(min); 
  max = Math.floor(max); 
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}



module.exports = mongoose.model("Meal", Meal);