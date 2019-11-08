import React, { useState, useEffect } from 'react';

import { getData } from '../../../ApiClient';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TimerSharpIcon from '@material-ui/icons/TimerSharp';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import './style.css';

function RecipeDetails ({match}) {

  const [recipe, setRecipe] = useState([]);

  const recipeId = match.params.id;

  const getDataFromAPI = () => {
    getData('recipe', recipeId).then(result => setRecipe(result));
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);
  console.log(recipe);


  const tagList = recipe.tags ? recipe.tags.map(el =>
    <Chip key={el.tag} label={el.tag} /> 
  ) : null;
  const categoryList = recipe.categories ? recipe.categories.map(el =>
    <Chip key={el.id} label={el.name} /> 
  ) : null;


  return (
    <Container maxWidth="sm" className="recipe_details_container">
      <Grid container alignContent="space-between" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">{recipe.name}</Typography>
        </Grid>
        <Grid item>
          <img className="recipe_details" src={recipe.mealThumb}></img>
        </Grid>
        <Grid item xs={6} className="flex_center space_evenly">
          <TimerSharpIcon />
          <Typography variant="h6">{recipe.time}</Typography>
        </Grid>
        <Grid item xs={6} className="flex_center space_evenly">
          <RestaurantIcon/>
          <Typography variant="h6">{recipe.difficulty}</Typography>
        </Grid>
        <Grid item xs={6}>
          {categoryList && categoryList}
        </Grid>
        <Grid item xs={6} className="flex_center space_evenly">
          {tagList && tagList}
        </Grid>
      </Grid>
    </Container>
  );
}

export default RecipeDetails;