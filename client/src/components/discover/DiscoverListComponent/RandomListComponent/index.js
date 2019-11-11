import React from 'react';

import RandomItem from './RandomItemComponent';

import './style.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

function RandomList ({recipes}) {

  const listOfRecipes = recipes.map(el => 
    <GridListTile key={el.idMeal} >
      <RandomItem  recipe={el} className="random_item_tile"/>
    </GridListTile>
  );

  return (
    <div className="random_list_container">
      <GridList cols={1.5} className="random_list">
        {listOfRecipes}
      </GridList>
    </div>
  );
}

export default RandomList;