const Category = require('../models/category');

// exports.PostCategory = async (ctx) => {
//   try {
//     const categories = await Category.insertMany(ctx.request.body);
//     ctx.body = categories;
//     ctx.status = 201;    
//   } catch (error) {
//     ctx.status = 500;
//     console.error(error);
//   }
// };

exports.getCategories = async (ctx) => {
  try {
    ctx.body = await Category.find();
    ctx.status = 200;    
  } catch (error) {
    ctx.status = 500;
    console.error(error);
  }
};


exports.getCategoryByName = async (ctx) => {
  try {
    const ids = ctx.params.ids;
    ctx.body = await Category.find({id: {$in: {ids}}});
    ctx.status = 200;
  } catch (error) {
    ctx.status=500;
    console.error(error);
  }
};