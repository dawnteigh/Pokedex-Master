import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/play" render={ (props)=> <Play { ...props } range={range} caught={caught} setCaught={setCaught} /> } />  
          <Route exact path="/pokedex" render={ (props) => <Pokedex { ...props } caught={caught} />} />
          <Route exact path="/" render={ (props) => <Home { ...props } rangeChange={handleClick} /> } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
