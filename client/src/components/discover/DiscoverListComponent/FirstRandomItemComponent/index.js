import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import GridListTileBar from '@material-ui/core/GridListTileBar';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import './style.css';

function FirstRandomItem ({recipe}) {

  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(prev=> !prev);
  };
  
  return (  
    <div className="first_random_container">
      <Link to={{pathname: `/Recipes/${recipe.idMeal}`}} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <img src={recipe.mealThumb} className="first_random_media" alt={recipe.name}></img>
        <GridListTileBar 
          title={recipe.name} 
          className="first_random_tile_bar"
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

export default FirstRandomItem;