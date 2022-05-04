import '../App.css';
import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from './Home'
import Play from './Play'
import Pokedex from './Pokedex'
import NavBar from './NavBar'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/play">
          <Play />
        </Route>
        <Route exact path="/pokedex">
          <Pokedex />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
