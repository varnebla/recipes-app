import React, { useState, useEffect } from 'react';

import { getData } from '../../../ApiClient';
import RecipeItem from '../../recipe/RecipeItem';
import EmptyState from '../../common/EmptyState';

import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.css';

function ListByTag ({ match }) {

  const [tagRecipes, setTagRecipes] = useState([]);
  const [noList, setNoList] = useState(false);
  const theme = useTheme();

  const screenSize = {
    small: useMediaQuery(theme.breakpoints.down('xs')),
    medium: useMediaQuery(theme.breakpoints.down('lg'))
  };

  const tagsNames = match.params.id;

  const getDataFromAPI = () => {
    getData('mealByTag', tagsNames).then(results => {
      results.length > 0 
        ? setTagRecipes(results)
        : setNoList(true);
    });
  };
  

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const setDistribution = screenSize.small ? 1 : 2;

  let listOfRecipes = [];
  if (tagRecipes.length > 0) listOfRecipes = tagRecipes.map(el => 
    <GridListTile key={el.idMeal}>
      <RecipeItem recipe={el}/>
    </GridListTile>
  );
  return (
    <Container maxWidth="sm">
      {
        listOfRecipes.length > 0 
          ? <GridList cellHeight={250} cols={setDistribution} spacing={12}>
            {listOfRecipes}
          </GridList>
          : noList
            ? <EmptyState />
            : <CircularProgress className="circular_progress"/>
      }
      
    </Container>
  );
}

export default ListByTag;