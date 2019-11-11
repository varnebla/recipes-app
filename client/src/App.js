import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavigationBar from './components/navigation/Navigation';
import Discover from './components/discover/DiscoverComponent';
import CategoryList from './components/categories/CategoryList';
import RecipeDetails from './components/recipe/RecipeDetails';
import ListByCategory from './components/lists/ListByCategory';
import ListByIngredients from './components/lists/ListByIngredients';
import ListByTag from './components/lists/ListByTag';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ThemeProvider';

import './App.css';

function App () {

  return (
    <ThemeProvider theme={theme}>       
      <div className="App">        
        <h1>CHICKPEAS</h1>
        <div>
          <BrowserRouter>
            <NavigationBar />
            <Switch>
              <Route path="/" component={Discover} exact  />
              <Route path="/Categories" component={CategoryList} exact/>
              <Route path="/Recipes/Categories/:id" component={ListByCategory}/>
              <Route path="/Recipes/Ingredients/:id" component={ListByIngredients}/>         
              <Route path="/Recipes/Tags/:id" component={ListByTag}/>        
              <Route path="/Recipes/:id" component={RecipeDetails}/> 
            </Switch>
          </BrowserRouter>
        </div>  
      </div>
    </ThemeProvider>
  );
}

export default App;
