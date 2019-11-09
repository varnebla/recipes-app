import React, { useState, useEffect } from 'react';

import { getData } from '../../../ApiClient';
import RecipeIngredients from '../RecipeIngredients';
import RecipeDirections from '../RecipeDirections';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';

import TimerSharpIcon from '@material-ui/icons/TimerSharp';
import RestaurantIcon from '@material-ui/icons/Restaurant';

import './style.css';

function RecipeDetails ({match}) {
  const [recipe, setRecipe] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  
  const recipeId = match.params.id;

  const getDataFromAPI = () => {
    getData('recipe', recipeId)
      .then(result => {
        setRecipe(result.meal);
        setCategories(result.categories);
        setIngredients(result.ingredients);
      });
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const quantities = recipe.ingredients;

  const tagList = recipe.tags ? recipe.tags.map(el =>
    <Chip key={el.tag} label={el.tag} /> 
  ) : null;
  const categoryList = categories.map(el => 
    <Typography key={el.id} variant="subtitle1">{el.name.toUpperCase()}</Typography>
  );

  let directions = [];
  if (recipe.instructions) {
    directions = recipe.instructions.split(/[\r\n]+/gm);
  }

  const ingredientList = <RecipeIngredients ingredients={ingredients} quantities={quantities}/>;
  const directionList = <RecipeDirections directions={directions} />;



  return (
    <Container maxWidth="sm" className="recipe_details_container">
      {
        recipe.name
          ?<Grid container alignContent="space-between" spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5">{recipe.name}</Typography>
            </Grid>
            <Grid item xs={12} className="flex_center space_evenly">
              {categoryList}
            </Grid>
            <Grid item>
              <img className="recipe_details" src={recipe.mealThumb}></img>
            </Grid>
            <Grid item xs={6} className="flex_center space_evenly">
              <TimerSharpIcon />
              <Typography variant="h6">{recipe.time} min</Typography>
            </Grid>
            <Grid item xs={6} className="flex_center space_evenly">
              <RestaurantIcon/>
              <Typography variant="h6">{recipe.difficulty}</Typography>
            </Grid>
            <Grid item xs={12} className="flex_center space_evenly">
              {tagList && tagList}
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
              {ingredientList}
            </Grid>
            <Grid item xs={12}>
              {directionList}
            </Grid>
          </Grid>
          :<CircularProgress className="circular_progress"/>      
      }
    </Container>

  );
}

export default RecipeDetails;