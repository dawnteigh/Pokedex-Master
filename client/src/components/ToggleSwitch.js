import React, { useContext } from 'react'
import masterBall from '../assets/masterball.png'
import { PokeContext } from '../context/PokeContext'

const ToggleSwitch = () => {

  const { mode, setMode } = useContext(PokeContext)

  const handleClick = () => {
    if (mode === "easy") setMode("hard")
    else setMode("easy")
  }

  return (
    <div className="switch-wrapper">
      <span style={{ color: mode === "easy" ? "#ee07e2" : "black" }}>Easy</span>
      <div className="switch" onClick={handleClick}>
        <img src={masterBall} alt="MasterBall" className={`slider ${mode === "hard" ? "slider-action" : null}`} />
      </div>
      <span style={{ color: mode === "hard" ? "#ee07e2" : "black" }}>Hard</span>
    </div>
  )
}

export default ToggleSwitch