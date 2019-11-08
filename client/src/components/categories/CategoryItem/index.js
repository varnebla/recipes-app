import React from 'react';
import {Link} from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import './style.css';

function CategoryItem ({category}) {

 
  

  return (   
    <Link to={{pathname: `/Categories/${category.id}`}} >
      <img src={category.thumb} className="category_item_media" ></img>
      <GridListTileBar title={category.name} className="category_tile_bar"/>
    </Link>
  );
}

export default CategoryItem;