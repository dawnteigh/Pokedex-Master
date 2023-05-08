import React, { useState, useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import AnswerForm from './AnswerForm'
import encounter from '../questionmark.png'

const Play = () => {

  const { caught, setCaught, pokemon, entry, range, mode, setMode, checkedStyle } = useContext(PokeContext)

  const [showHints, setShowHints] = useState(false)

  const handleCaught = (id) => {
    setCaught([...caught, id])
  }

  const safeEntry = entry.toLowerCase().replaceAll(pokemon.name.toLowerCase(), "_____");
  const dexCompletion = caught.filter(num => num < range.max)
  const toggleHints = () => setShowHints(!showHints)

  return (
    <div className="play">
      <p>
        Read the Pokédex entry below and guess the Pokémon being described to capture it. Answers are not case-sensitive, however special symbols will need to be omitted and spaces replaced with '-'. For example, "Mr. Mime" should be input as "Mr-Mime". Another special case is Nidoran♂ and Nidoran♀, which should be input as "Nidoran-m" and "Nidoran-f", respectively. You can also select a mode below; 'Easy' will show what the Pokémon was on an incorrect guess, 'Hard' will not.
      </p>
      <form>
        <label style={(mode === "easy" ? checkedStyle : null)} >
            <input
            type="radio"
            checked={mode === "easy"}
            onChange={() => setMode("easy")}
            />
            Easy Mode
        </label>
        <label style={(mode === "hard" ? checkedStyle : null)} >
            <input
            type="radio"
            checked={mode === "hard"}
            onChange={() => setMode("hard")}
            />
            Hard Mode
        </label>
      </form>
      <img
      src={encounter}
      alt="A wild mystery Pokemon appeared!"
      className="enlarge"
      />
      <br/><br/>
      <b>{(entry.toLowerCase().includes(pokemon.name.toLowerCase())) ? safeEntry.charAt(0).toUpperCase() + safeEntry.slice(1) : entry}</b>
      <br/><br/>
      <AnswerForm handleCaught={handleCaught} />
      {dexCompletion.length}/{range.max - 1} Pokémon captured
      <br/><br/>
      <button className="button" onClick={toggleHints} >{!showHints ? "Show Hints" : "Hide Hints"}</button>
      <br/><br/>
      <div style={{display: !showHints ? "none" : "block"}}>
        This Pokémon is {(pokemon.types.length > 1) ? pokemon.types[0].type.name + "/" + pokemon.types[1].type.name : pokemon.types[0].type.name} type.
        <br/>
        Its name starts with '{pokemon.name.charAt(0).toUpperCase()}'.
      </div>
    </div>
    )
}

export default Play
