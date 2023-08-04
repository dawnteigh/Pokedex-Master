import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
          <Route exact path="/play" render={ (props) => <Play { ...props } /> } />  
          <Route exact path="/pokedex" render={ (props) => <Pokedex { ...props } />} />
          <Route exact path="/" render={ (props) => <Home { ...props } /> } />
        </Switch>
    </div>
  );
}

export default App;
