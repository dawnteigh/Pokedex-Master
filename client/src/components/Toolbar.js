import React, { useState } from 'react'
import { BiSolidDownArrow } from 'react-icons/bi'
import ToggleSwitch from './ToggleSwitch';
import Type from "./Type";

const Toolbar = ({ pokemon }) => {

  const [showHints, setShowHints] = useState(false)
  const toggleHints = () => setShowHints(!showHints)

  const iconStyle = {
    transform: showHints && "rotate(-180deg)",
    transition: "transform .5s ease-in-out"
  }
  const renderTypes = pokemon.types.map((t, i) => <Type key={i} type={t} variant="tt-hint" />)

  return (
    <div className={`toolbar-wrapper ${!showHints && "shrink-wrap"}`}>
      <div className="toolbar">
        <span style={{ color: showHints && "#ee07e2" }}>Hints <button className="hints-button" onClick={toggleHints} ><BiSolidDownArrow style={iconStyle} /></button></span>
        <ToggleSwitch />
      </div>
      <div className={`hints ${!showHints && "hide-hints"}`}>
        This Pokémon is {renderTypes} type.
        <br />
        Its name starts with '{pokemon.name.charAt(0).toUpperCase()}'.
      </div>
    </div>
  )
}

export default Toolbar