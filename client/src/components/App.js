import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from 'react'
import { Route, Switch } from "react-router-dom";
import { PokeContext } from '../context/PokeContext';
import Home from './Home'
import Play from './Play'
import Pokedex from './Pokedex'
import Header from './Header';
import Errors from './Errors';

const App = () => {

  const { errors } = useContext(PokeContext)

  return (
    <div className="App">
      <Header />
      {errors ? <Errors /> : null}
      <Switch>
        <Route exact path="/play" render={(props) => <Play {...props} />} />
        <Route exact path="/pokedex" render={(props) => <Pokedex {...props} />} />
        <Route exact path="/" render={(props) => <Home {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
