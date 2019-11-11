import React from 'react';

import FirstRandomItem from './FirstRandomItemComponent';
import RandomList from './RandomListComponent';

import './style.css';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '2%',
  },
}));

function DiscoverList ({recipes}) {

  const classes = useStyles();

  const firsItem = 
  <GridListTile>
    <FirstRandomItem recipe={recipes[0]}></FirstRandomItem>;      
  </GridListTile>;

  const randomList = recipes.filter((el,key) => key > 0);
  const list = <RandomList recipes={randomList}/>;

  return (
    <Grid container  spacing={5}>
      <Grid item sm={12}>
        <Typography align='left' color="secondary" variant="h5">
            Day recomendation
        </Typography>
        <Typography align='left' color="textSecondary" variant="h6" className={classes.root}>
          Enjoy cooking our daily suggestion
        </Typography>
        <GridList cellHeight='auto' cols={1} spacing={12}>
          {firsItem}
        </GridList>
      </Grid>
      <Grid item sm={12}>
        <Typography align='left' color="secondary" variant="h5">
          New recipes
        </Typography>
        <Typography align='left' color="textSecondary" variant="h6" className={classes.root}>
          Become a culinary artist
        </Typography>
        {list}  
      </Grid>
    </Grid>
      

  );
}

export default DiscoverList;