import React, {useState, useEffect} from 'react';

import Search from '../SearchComponent';
import DiscoverList from '../DiscoverListComponent';
import { getData } from '../../../ApiClient';

import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.css';
import { Grid } from '@material-ui/core';
import EmptyState from '../../common/EmptyState';

function Discover () {

  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [noList, setNoList] = useState(false);

  const getDataFromAPI = () => {
    if (!sessionStorage.getItem('randomRecipes')) 
      getData('random').then(results => {
        if (results && results.length>0) {
          setRecipes(results);
          sessionStorage.setItem('randomRecipes', JSON.stringify(results));
        }
        else setNoList(true);
      });
    else setRecipes(JSON.parse(sessionStorage.getItem('randomRecipes')));
    getData('ingredients').then(results => {
      if (results && results.length >0) setIngredients(results.map(el => {return {label: el.name};}));
    });
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);
  
  return (
    <Container maxWidth="sm" className="discover">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Search ingredients={ingredients}></Search>
        </Grid>
        <Grid item xs={12}>
          {
            recipes.length >0
              ? <DiscoverList recipes={recipes}></DiscoverList>
              : noList 
                ? <EmptyState /> 
                : <CircularProgress className="circular_progress"/> 
          }

        </Grid>
      </Grid>
    </Container>
  );
}

export default Discover;