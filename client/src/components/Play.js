import React, { useState, useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import AnswerForm from './AnswerForm'
import Congrats from './Congrats'
import encounter from '../questionmark.png'

const Play = () => {

  const { caught, setCaught, pokemon, entry, range, mode, setMode, checkedStyle, pokedex, setPokedex } = useContext(PokeContext)

  const [showHints, setShowHints] = useState(false)

  const handleCaught = (id) => {
    setCaught([...caught, id])
    setPokedex([...pokedex, pokemon])
  }

  const pokeFormat = (pok) => pok.split(" ").join("-").replaceAll(/[.:’']/g, "").replaceAll('\n', '-').replace('♂', '-m').replace('♀', '-f').replaceAll('é', 'e')

  const cleanEntry = (entry) => {
    if (pokeFormat(entry).toLowerCase().includes(pokemon.name.toLowerCase())) {
      const blankedEntry = entry.replaceAll('\n', ' ').split(" ").map(str => {
        if (pokemon.name.toLowerCase().split('-').includes(pokeFormat(str).toLowerCase())) {
          return "_____"
        }
        else if (str.toLowerCase().includes(pokemon.name.toLowerCase()) && str.includes(",")) {
          return "_____,"
        }
        else if ((str.split("’").length > 1) && (pokeFormat(str.toLowerCase().split("’")[0]) === pokemon.name.toLowerCase())) {
          return "_____'s"
        }
        else {
          return str
        }
      })
      return blankedEntry.join(" ")
    }
    else {
      return entry
    }
  }

  const dexCompletion = caught.filter(num => num < range.max)
  const toggleHints = () => setShowHints(!showHints)

  if (dexCompletion.length === range.max - 1) {
    return <Congrats />
  }

  return (
    <div className="play">
      <br />
      <p>
        Read the Pokédex entry below and guess the Pokémon being described to capture it. Spelling counts, but correct answers are not case-sensitive, and punctuation is optional. For example, "Mr. Mime" is the same as "mR MiMe". Nidoran♂ and Nidoran♀ can alternatively be entered as "Nidoran-m" and "Nidoran-f", respectively. You can also select a mode below; 'Easy' shows you an image of the escaping Pokémon after an incorrect guess, 'Hard' does not.
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
      <br />
      <b>{cleanEntry(entry)}</b>
      <br />
      <AnswerForm handleCaught={handleCaught} pokeFormat={pokeFormat} />
      {dexCompletion.length}/{range.max - 1} Pokémon captured
      <br />
      <button className="button" onClick={toggleHints} >{!showHints ? "Show Hints" : "Hide Hints"}</button>
      <br />
      <div style={{ display: !showHints ? "none" : "block" }}>
        This Pokémon is {(pokemon.types.length > 1) ? pokemon.types[0] + "/" + pokemon.types[1] : pokemon.types[0]} type.
        <br />
        Its name starts with '{pokemon.name.charAt(0).toUpperCase()}'.
      </div>
    </div>
  )
}

export default Play
