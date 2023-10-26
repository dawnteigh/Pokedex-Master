import React, { useState } from 'react'
import Login from './Login';
import Signup from './Signup';
import { BiSolidDownArrow, BiSolidUpArrow, BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi'
import QuestionMark from '../assets/questionmark.png'
import Me from '../assets/me.jpg'
import MasterBall from '../assets/masterball.png'
import PinkPixels from '../assets/pink-pixels.svg'

const FrontPage = () => {

  const [screen, setScreen] = useState("")

  const display = (str) => {
    if (str === "") return <h1>Hello World!</h1>
    if (str === "login") return <Login />
    if (str === "signup") return <Signup />
    if (str === "encounter") return <img src={QuestionMark} alt="Wild Pokémon encounter." className="display-img" />
    if (str === "me") return <img src={Me} alt="Donte, creator of Pokédex Master" className="display-img" />
    if (str === "version") return <h1>Hello World!</h1>
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