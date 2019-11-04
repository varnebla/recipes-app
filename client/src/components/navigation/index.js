import React from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';

function NavigationBar() {
  return (
    <div className="App">
     <NavLink to="/">Discover</NavLink>
     <NavLink to="/Categories">Categories</NavLink>     
    </div>
  );
}

export default NavigationBar;