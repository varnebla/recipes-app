import React, { useState, useEffect } from 'react';

import { getData } from '../../../ApiClient';
import RecipeItem from '../../recipe/RecipeItem';

import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './style.css';

function ListByCategory ({ match }) {

  const [catRecipes, setCatRecipes] = useState([]);
  const theme = useTheme();

  const screenSize = {
    small: useMediaQuery(theme.breakpoints.down('xs')),
    medium: useMediaQuery(theme.breakpoints.down('lg'))
  };

  const categoryId = match.params.id;

  const getDataFromAPI = () => {
    getData('listcat', categoryId).then(results => setCatRecipes(results));
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const setDistribution = screenSize.small ? 1 : 2;

  const listOfRecipes = catRecipes.map(el => 
    <GridListTile key={el.idMeal}>
      <RecipeItem recipe={el}/>
    </GridListTile>
  );

  return (
    <Container maxWidth="sm">
      <GridList cellHeight={250} cols={setDistribution} spacing={12}>
        {listOfRecipes}
      </GridList>
    </Container>
  );
}

export default ListByCategory;