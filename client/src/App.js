import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavigationBar from './components/navigation'
import Discover from './components/discover'
import CategoryList from './components/categories/CategoryList'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>APPNAME</h1>
      <div>
        <BrowserRouter>
        <NavigationBar />
          <Switch>
            <Route path="/" component={Discover} exact/>
            <Route path="/Categories" component={CategoryList} exact/>            
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
