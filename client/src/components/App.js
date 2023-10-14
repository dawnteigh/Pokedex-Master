import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from 'react'
import { Route, Switch } from "react-router-dom";
import { PokeContext } from '../context/PokeContext';
import Home from './Home'
import Play from './Play'
import Pokedex from './Pokedex'
import NavBar from './NavBar'
import Login from './Login';
import Signup from './Signup';
import Saves from './Saves';
import Errors from './Errors';

const App = () => {

  const { user, saveFile, errors } = useContext(PokeContext)

  if (!user) {
    return (
      <div className='App'>
        {errors ? <Errors /> : null}
        <Login />
        <Signup />
      </div>
    )
  }

  if (!saveFile) {
    return (
      <div className='App'>
        <Saves />
      </div>
    )
  }

  return (
    <div className="App">
      <NavBar />
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
