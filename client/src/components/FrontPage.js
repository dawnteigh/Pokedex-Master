import React, { useState } from 'react'
import Login from './Login';
import Signup from './Signup';
import Version from './Version';
import { BiSolidDownArrow, BiSolidUpArrow, BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi'
import QuestionMark from '../assets/questionmark.png'
import Me from '../assets/me.jpg'
import MasterBall from '../assets/masterball.png'
import PinkPixels from '../assets/pink-pixels.svg'

const FrontPage = () => {

  const [screen, setScreen] = useState("")

  const display = (str) => {
    if (str === "") {
      return (
        <div className="welcome">
          <h3 className='screen-header'>Hello, Trainer!</h3>
          <p>
            You've captured Pokémon to register them in the Pokédex, but did you ever actually read the entries? Prove it! Powered by data from <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">PokéAPI</a>, Pokédex Master puts your knowledge to the test by showing you a Pokédex entry and prompting you to guess which Pokémon it belongs to. Guessing correctly will add the Pokémon to your collection; answer wrong and it escapes! Can you complete your Pokédex?
          </p>
          <span className="blink">LOG IN OR SIGN UP TO PLAY</span>
        </div>
      )
    }
    if (str === "login") return <Login />
    if (str === "signup") return <Signup />
    if (str === "encounter") return <img src={QuestionMark} alt="Wild Pokémon encounter." className="display-img" />
    if (str === "version") return <Version />
    if (str === "me") {
      return <a href="https://dawnteigh.github.io/" target="_blank" rel="noreferrer">
        <img src={Me} alt="Donte, creator of Pokédex Master" className="display-img" />
      </a>
    }
    else return <h1>Oops...</h1>
  }

  return (
    <div id="front-page">
      <div className="display-wrapper">
        <div className="display-top">
          {display(screen)}
        </div>
        <div className="display-bottom">
          <button className="game-btn gb-li" onClick={() => setScreen("login")}>Log In</button>
          <button className="game-btn gb-su" onClick={() => setScreen("signup")}>Sign Up</button>
          <button className="game-btn gb-up" onClick={() => setScreen("")}><BiSolidUpArrow /></button>
          <button className="game-btn gb-right" onClick={() => setScreen("version")}><BiSolidRightArrow /></button>
          <button className="game-btn gb-down" onClick={() => setScreen("encounter")}><BiSolidDownArrow /></button>
          <button className="game-btn gb-left" onClick={() => setScreen("me")}><BiSolidLeftArrow /></button>
        </div>
      </div>
      <img src={MasterBall} alt="Spinning Master Ball" className="master-ball" />
      <img src={PinkPixels} alt="Pink pixel steps" className="bottom-img" />
    </div>
  )
}

export default FrontPage