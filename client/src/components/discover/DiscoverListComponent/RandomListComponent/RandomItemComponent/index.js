import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import './style.css';

function RandomItem ({recipe}) {
  return (
    <Card className="random_item">
      <CardActionArea>
        <CardMedia
          image={recipe.mealThumb}
          title={recipe.name}
          className=""
          height="200px"
          component="img">
          {/* <div className="title_picture">
            <h3>{recipe.name}</h3>
          </div> */}

        </CardMedia>
      </CardActionArea>
    </Card>
    // <div className="random_item" style={{backgroundImage: `url(${recipe.mealThumb})`}}>
    // </div>
  );
}

export default RandomItem;