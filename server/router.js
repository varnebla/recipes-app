const Router = require('koa-router');
const router = new Router();

const categories = require('./controllers/category');
const ingredients = require('./controllers/ingredient');
const meal = require('./controllers/meal')

// router.post('/addcat', categories.PostCategory);
router.get('/random', meal.getRandomMeals);
router.get('/discover', meal.getMeals);
router.get('/categories', categories.getCategories);
router.post('/meal', meal.mealConverter);
router.get('/ingredients', ingredients.getIngredients);

module.exports = router;