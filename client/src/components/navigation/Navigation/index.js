import React, {useState} from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function NavigationBar () {

  const [value, setValue] = useState('Discover');

  const handleChange = (event,newValue) => {
    setValue(newValue);
  };
  
  return (
    <Tabs className="navbar" value={value} onChange={handleChange} centered>    
      <Tab component={NavLink} value="Discover" to="/" label="Discover"/>
      <Tab component={NavLink} value="Categories" to="/Categories" label="Categories"/>           
    </Tabs>
  );
}

export default NavigationBar;