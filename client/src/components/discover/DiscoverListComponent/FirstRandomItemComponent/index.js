import React from 'react';
import './style.css';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

function FirstRandomItem ({recipe}) {
  
  return (
    <Card className="card_recipe">
      <CardActionArea>
        <CardMedia
          image={recipe.mealThumb}
          title={recipe.name}
          className="first_random_item"
          component="img">
        </CardMedia>
      </CardActionArea>
      <CardContent>
        <Typography component="h5" variant="h5">{recipe.name}</Typography>
        <div className="recipe_info">
          <Typography component="h6" variant="h6">{recipe.time} min</Typography>
          <Typography component="h6" variant="h6">{recipe.difficulty}</Typography>
        </div>
      </CardContent>
    </Card>
    // <Grid container className="first_random_item">
    //   <Grid item xs={12}  className="pic_media">
    //     <Box className="recipe_media" style={{backgroundImage: `url(${recipe.mealThumb})`}}></Box>
    //   </Grid>
    //   <Grid item xs={12}  className="info_container" >
    //     <Typography component="h5" variant="h5">{recipe.name}</Typography>
    //     <div className="recipe_info">
    //       <Typography component="h6" variant="h6">{recipe.time} min</Typography>
    //       <Typography component="h6" variant="h6">{recipe.difficulty}</Typography>
    //     </div>
    //   </Grid>
    // </Grid>
  );
}

export default FirstRandomItem;