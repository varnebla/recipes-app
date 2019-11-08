const BASE_URL = 'http://localhost:3001';

const fetchRequest = (path, options) => {
  return fetch(BASE_URL + path, options)
    .then(response => response.json())
    .catch(reject => console.error(reject)); //eslint-disable-line no-console
};


exports.getData = (name, ...args) => {
  switch (name) {
  case 'random':
    return fetchRequest('/random');
  case 'categories':
    return fetchRequest('/categories');
  case 'ingredients':
    return fetchRequest('/ingredients');  
  case 'listcat':
    return fetchRequest(`/listcat/${args}`);  
  case 'recipe':
    return fetchRequest(`/recipe/${args}`);  
  default:
    break;
  }
};

exports.getRecipes = () => {
  return fetchRequest('/discover');
};

//TODO REMOVE

// exports.getIngredients = () => {
//   return fetchRequest('/ingredients');
// };

// exports.getCategories = () => {
//   return fetchRequest('/cartegories');
// };

// exports.getRandom = () => {
//   return fetchRequest('/random');
// };