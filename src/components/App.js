import '../App.css';
import React, { useState } from 'react'
import { Route, Switch } from "react-router-dom";
import Home from './Home'
import Play from './Play'
import Pokedex from './Pokedex'
import NavBar from './NavBar'

const App = () => {

  const [range, setRange] = useState({
    min: 0,
    max: 899
  })

  //callback for dex buttons rendered in Home
  const handleClick = (obj) => {
    setRange(obj)
  }

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
          <Home rangeChange={handleClick} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
