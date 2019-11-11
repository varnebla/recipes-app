import React, { useState, useEffect } from 'react';
import { getData } from '../../../ApiClient';
import CategoryItem from '../CategoryItem';

import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.css';
import EmptyState from '../../common/EmptyState';

function CategoryList () {

  const [categories, setCategories] = useState([]);
  const [noList, setNoList] = useState(false);

  const getDataFromAPI = () => {
    getData('categories').then(results => {
      if (results && results.length >0) setCategories(results);
      else setNoList(true);
    });
      
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
      {
        categoryList.length > 0
          ? <GridList cellHeight={160} cols={2} spacing={12}>        
            {categoryList}
          </GridList>
          : noList
            ? <EmptyState />
            :<CircularProgress className="circular_progress"/>
        
      }
    </Container>
  );
}

export default CategoryList;