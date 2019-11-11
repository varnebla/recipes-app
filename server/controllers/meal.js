const Meal = require('../models/meal');
const Ingredient = require('../models/ingredient');
const Category = require('../models/category');
const _ = require('lodash');

exports.mealConverter = async (ctx) => {
  try {
    const req = ctx.request.body;
    const arrMeal= [];
    const fillArrayMeal = async () => {
      await asyncForEach(req, async (el) => {
        const meal = {
          idMeal: el['idMeal'],
          name: el['strMeal'],
          instructions: el['strInstructions'],
          mealThumb: el['strMealThumb'],
          youtube: el['strYoutube'],
          tags: tagify(el['strTags']),
          categories: [{id: 11}],
          ingredients: []
        };
      
        const arrayOfIngredients = _.filter(el, (el, key) => key.replace(/\d+$/, '') === 'strIngredient');
        const ingIds = await getIdsByName(arrayOfIngredients);
        const arrayOfmeasures = _.filter(el, (el, key) => key.replace(/\d+$/, '') === 'strMeasure');
        
        ingIds.forEach((el,key) => {
          meal.ingredients.push({
            id: el,
            quantity: arrayOfmeasures[key]
          });
        });
        arrMeal.push(meal);
        console.log(meal);
      });
      console.log(arrMeal);
      await Meal.insertMany(arrMeal);
      // ctx.body= response;
      // ctx.status= 201;
      
    };

    fillArrayMeal();
    
  } catch (error) {
    console.error(error);
    ctx.status=500;
  }
  


};

async function asyncForEach (array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

exports.getRandomMeals = async (ctx) => {
  try {
    const randomArray = [];
    const meals = await Meal.find();
    const ids = meals.map(el=> el.idMeal);
    for (let i = 0; i<8 ; i++) {
      randomArray.push(ids[randomNumber(0, ids.length-1)]);
    }
    console.log(randomArray); //eslint-disable-line no-console
    let randomMeals = await Meal.find({'idMeal': {$in: randomArray}});
    ctx.body = randomMeals;
    ctx.status = 200;    
  } catch (error) {
    console.error(error);
    ctx.status = 500;
  }
};

exports.getMeal = async (ctx) => {
  try {
    const id = ctx.params.id;
    
    let recipe = {};
    recipe.meal = await Meal.findOne({idMeal: id});

    
    const ingredients = recipe.meal.ingredients.map(el => el.id);
    recipe.ingredients = await Ingredient.find({id: {$in: ingredients}});
    

    const categories = recipe.meal.categories.map(el => el.id);
    recipe.categories = await Category.find({id: {$in: categories}});
    
    console.log(recipe);

    ctx.body = recipe;
    ctx.status = 200;
  } catch (error) {
    ctx.status = 500;
    console.error(error);
  }
};

exports.getMealByCategory = async (ctx) => {
  try {
    const id = ctx.params.id;
    console.log(id);
    const meals = await Meal.find({categories: { $elemMatch: {id: id}}});
    ctx.body = meals;
    ctx.status = 200;
  } catch (error) {    
    ctx.status = 500;
    console.error(error);
  }
};

exports.getMealByIngredients = async ctx => {
  try {
    const names = JSON.parse(ctx.params.names);
    const ingredients = await Ingredient.find({name: {$in: names}});
    const ingIds = ingredients.map(el => el.id);
    const meals = await Meal.find({'ingredients.id': {$all: ingIds}});
    ctx.body= meals;
    ctx.status = 200
  } catch (error) {
    ctx.status=500;
    console.error(error);
  }
};

exports.getMealByTag = async ctx => {
  try {
    const tag = ctx.params.tags;
    const meals = await Meal.find({'tags.tag': tag});
    ctx.body=meals;
    ctx.status=200;
  } catch (error) {
    ctx.staus=500;
    console.error(error);
  }
};


function randomNumber (min, max) {  
  min = Math.ceil(min); 
  max = Math.floor(max); 
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}
//TODO REMOVE
function capitalizeName (name) {
  let arr = name.split(' ');
  arr = arr.map(el => {
    el = el.charAt(0).toUpperCase() + el.slice(1);
    return el;
  });
  name = arr.join(' ');
  return name;
}

async function getIdsByName (names) {
  names = names.map(el => el && capitalizeName(el));  
  const ingredients = await Ingredient.find({'name': {$in: names}});
  const ids  = ingredients.map(el => el.id);
  return ids;
}


function tagify (tags) {
  if (!tags) return null;
  let result = [];
  let arr = tags.split(',');
  arr.forEach(el => result.push({tag: el}));
  return result;
}


//TODO REMOVE
const updateData = (list) => {
  return list.reduce((acc, recipe) => ({
    ...acc,
    [recipe.idMeal]: recipe
  }));
};