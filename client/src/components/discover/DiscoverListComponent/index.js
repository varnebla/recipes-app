import React from 'react';

import FirstRandomItem from './FirstRandomItemComponent';
import RandomList from './RandomListComponent';

import './style.css';


function DiscoverList ({recipes}) {

  const list = recipes.map(el => <h3 key={el.idMeal}>{el.name}</h3>);
  const firsItem = <FirstRandomItem recipe={recipes[0]}></FirstRandomItem>;

  return (
    <div className="discover_list">
      {firsItem}
      {list}
    </div>
  );
}

export default DiscoverList;