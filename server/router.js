const Router = require('koa-router');
const router = new Router();

const categories = require('./controllers/category');
const ingredients = require('./controllers/ingredient');
const meal = require('./controllers/meal')

// router.post('/addcat', categories.PostCategory);
router.get('/random', meal.getRandomMeals);
router.get('/categories', categories.getCategories);
router.get('/ingredients', ingredients.getIngredients);
router.get('/listcat/:id', meal.getMealByCategory);
router.get('/recipe/:id', meal.getMeal);

router.post('/meal', meal.mealConverter);

module.exports = router;