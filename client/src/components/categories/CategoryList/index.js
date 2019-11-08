import React, { useState, useEffect } from 'react';
import { getData } from '../../../ApiClient';
import CategoryItem from '../CategoryItem';

import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import './style.css';

function CategoryList () {

  const [categories, setCategories] = useState([]);

  const getDataFromAPI = () => {
    getData('categories').then(results => setCategories(results));
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const categoryList = categories.map(el =>
    <GridListTile key={el.id}>
      <CategoryItem category={el} />
    </GridListTile>
  );

  return (
    <Container maxWidth="sm" className="category_list">
      <GridList cellHeight={160} cols={2} spacing={12}>        
        {categoryList}
      </GridList>
    </Container>
  );
}

export default CategoryList;