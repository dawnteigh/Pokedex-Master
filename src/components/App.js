import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import Home from './Home'
import Play from './Play'
import Pokedex from './Pokedex'
import NavBar from './NavBar'

const App = () => {

  const [caught, setCaught] = useState([])
  const [range, setRange] = useState({
    min: 1,
    max: 899
  })

  const caughtArray = []

  useEffect(() => {
    fetch('http://localhost:6001/pokemon')
    .then(r => r.json())
    .then(data => {
      data.forEach(p => caughtArray.push(p.id))
    })
    .then(() => setCaught(caughtArray))
    .catch(() => alert('Failed to fetch local Pokédex info. Make sure JSON Server is running.'))
  }, [])

  //callback for dex buttons rendered in Home
  const handleClick = (obj) => {
    setRange(obj)
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/play">
          <Play range={range} caught={caught} setCaught={setCaught} />
        </Route>
        <Route exact path="/pokedex">
          <Pokedex caught={caught} />
        </Route>
        <Route exact path="/">
          <Home rangeChange={handleClick} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
