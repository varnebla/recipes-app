import React from 'react';
import {Link} from 'react-router-dom';

import GridListTileBar from '@material-ui/core/GridListTileBar';
import './style.css';

function CategoryItem ({category}) {

 
  

  return (   
    <Link to={{pathname: `Recipes/Categories/${category.id}`}} >
      <img src={category.thumb} className="category_item_media" alt={category.name}></img>
      <GridListTileBar title={category.name} className="category_tile_bar"/>
    </Link>
  );
}

export default CategoryItem;