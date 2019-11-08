import React from 'react';

import FirstRandomItem from './FirstRandomItemComponent';
import RandomList from './RandomListComponent';

import './style.css';


function DiscoverList ({recipes}) {
  const firsItem = <FirstRandomItem recipe={recipes[0]}></FirstRandomItem>;
  recipes.shift();
  const list = <RandomList recipes={recipes}/>;

  return (
    <div className="discover_list">
      {firsItem}
      {list}
    </div>
  );
}

export default DiscoverList;