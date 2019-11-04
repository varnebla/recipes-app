const Category = require('../models/category');

exports.PostCategory = async (ctx) => {
  try {
    const categories = await Category.insertMany(ctx.request.body);
    console.log(categories);
    ctx.body= categories;
    ctx.status = 201;    
  } catch (error) {
    ctx.status = 500;
    console.error(error);
  }
};

exports.getCategories = async (ctx) => {
  try {
    ctx.body = await Category.find();
    ctx.status = 200;    
  } catch (error) {
    ctx.status = 500;
    console.error(error);
  }
};

// exports.postIngredient = async (ctx) => {
//   try {
//     console.log(ctx.request.body);

//     let banana = await Ingredient.insertMany(ctx.request.body);
//     console.log(banana)
//     ctx.body = banana
//     console.log(ctx.body);
//     ctx.status = 201;    
//   } catch (error) {
//     ctx.status = 500;
//     console.error(error);
//   }
// };