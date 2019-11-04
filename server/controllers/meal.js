const Meal = require('../models/meal');
const Ingredient = require('../models/ingredient');
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
        console.log(meal)
      });
      console.log(arrMeal)
      await Meal.insertMany(arrMeal);
      // ctx.body= response;
      // ctx.status= 201;
      
    }

    fillArrayMeal();
    
  } catch (error) {
    console.error(error);
    ctx.status=500;
  }
  


}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

exports.getRandomMeals = async (ctx) => {
  const meals = await Meal.find();
  const ids = meals.map(el=> el.idMeal);
  const randomArray = [];
  for (let i = 0; i<5 ; i++) {
    randomArray.push(ids[randomNumber(0, ids.length-1)]);
  }
  console.log(randomArray);
  let randomMeals = await Meal.find({'idMeal': {$in: randomArray}});
  ctx.body = randomMeals;
}

function randomNumber(min, max) {  
  min = Math.ceil(min); 
  max = Math.floor(max); 
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function capitalizeName (name){
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
