import React, {useState} from 'react';

import { Link } from 'react-router-dom';

import './style.css';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';

function RecipeItem ({recipe}) {

  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(prev=> !prev);
  };


  return (
    <div className="recipe_item">
      <Link to={{pathname: `/Recipes/${recipe.idMeal}`}} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <img src={recipe.mealThumb} className="recipe_item_media"></img>
        <GridListTileBar 
          title={recipe.name} 
          className="recipe_tile_bar"
          subtitle={
            <Grow in={hover} style={{ transitionDelay: hover ? '50ms' : '0ms' }}>
              <div className="recipe_item_subtitle">
                <Typography variant="subtitle1">{recipe.time} min</Typography>
                <Typography variant="subtitle2">{recipe.difficulty}</Typography>
              </div>
            </Grow>
          }/>
      </Link>
      
    </div>
  );
}

export default RecipeItem;