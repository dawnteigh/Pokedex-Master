import React, { useState } from 'react'
import Type from "./Type";

const Hints = ({ pokemon }) => {

  const [showHints, setShowHints] = useState(false)
  const toggleHints = () => setShowHints(!showHints)

  const renderTypes = pokemon.types.map((t, i) => <Type key={i} type={t} variant="tt-hint" />)

  return (
    <div>
      <button className="button" onClick={toggleHints} >{!showHints ? "Show Hints" : "Hide Hints"}</button>
      <div className={`hints ${!showHints && "hide-hints"}`}>
        This Pokémon is {renderTypes} type.
        <br />
        Its name starts with '{pokemon.name.charAt(0).toUpperCase()}'.
      </div>
    </div>
  )
}

export default Hints