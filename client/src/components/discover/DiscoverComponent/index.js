import React, {useState, useEffect} from 'react';

import Search from '../SearchComponent';
import DiscoverList from '../DiscoverListComponent';
import { getData } from '../../../ApiClient';

import Container from '@material-ui/core/Container';
import './style.css';

function Discover () {

  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const getDataFromAPI = () => {
    if (!sessionStorage.getItem('randomRecipes')) 
      getData('random').then(results => {
        setRecipes(results);
        sessionStorage.setItem('randomRecipes', JSON.stringify(results));
      });
    else setRecipes(JSON.parse(sessionStorage.getItem('randomRecipes')));
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);
  
  return (
    <Container maxWidth="sm" className="discover">

      <Search></Search>


      {
        recipes.length > 0 &&
        <DiscoverList recipes={recipes}></DiscoverList>
      }

    </Container>
  );
}

export default Discover;