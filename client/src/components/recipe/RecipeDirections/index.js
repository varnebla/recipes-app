import React from 'react';
import './style.css';

function RecipeIngredients ({recipe}) {
  return (
    <div className="recipe_item">
      <h3>{recipe.name}</h3>
    </div>
  );
}

export default RecipeIngredients;