import React from 'react';

import RandomItem from './RandomItemComponent';

import './style.css';

function RandomList ({recipes}) {

  const listOfRecipes = recipes.map(el => <RandomItem key={el.idMeal} recipe={el}/>);

  return (
    <div className="random_list">
      {listOfRecipes}
    </div>
  );
}

export default RandomList;