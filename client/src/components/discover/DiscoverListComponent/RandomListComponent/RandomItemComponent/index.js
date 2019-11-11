import React, {useState} from 'react';

import GridListTileBar from '@material-ui/core/GridListTileBar';
import {Link} from 'react-router-dom';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import './style.css';

function RandomItem ({recipe}) {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(prev=> !prev);
  };
  return (
    <div className="random_item_container">
      <Link to={{pathname: `/Recipes/${recipe.idMeal}`}} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <img src={recipe.mealThumb} className="random_item_media" alt={recipe.name}></img>
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
          }
        />    
      </Link>
    </div>
  );
}

export default RandomItem;