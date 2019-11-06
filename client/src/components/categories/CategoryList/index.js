import React, { useState, useEffect } from 'react';

import { getData } from '../../../ApiClient';
import CategoryItem from '../CategoryItem';

import './style.css';

function CategoryList () {

  const [categories, setCategories] = useState([]);

  const getDataFromAPI = () => {
    getData('categories').then(results => setCategories(results));
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const categoryList = categories.map(el => <CategoryItem key={el.id} category={el}/>);

  return (
    <div className="category_list">
      {categoryList}
    </div>
  );
}

export default CategoryList;