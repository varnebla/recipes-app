import React from 'react';
import './style.css';

function CategoryList ({category}) {
  return (
    <div className="category_list">
      <h2>{category.name}</h2>
    </div>
  );
}

export default CategoryList;