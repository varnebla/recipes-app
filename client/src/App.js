import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavigationBar from './components/navigation/Navigation';
import Discover from './components/discover/DiscoverComponent';
import CategoryList from './components/categories/CategoryList';
import RecipeDetails from './components/recipe/RecipeDetails';


import './App.css';
import ListByCategory from './components/categories/ListByCategory';

function App () {

  return (
    <div className="App">
      <h1>CHICKPEAS</h1>
      <div>
        <BrowserRouter>
          <NavigationBar />
          <Switch>
            <Route path="/" component={Discover} exact  />
            <Route path="/Categories" component={CategoryList} exact/>
            <Route path="/Categories/:id" component={ListByCategory}/>         
            <Route path="/Recipes/:id" component={RecipeDetails}/>         
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
