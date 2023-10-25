import React, { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import AnswerForm from './AnswerForm'
import Toolbar from "./Toolbar";
import Congrats from './Congrats'
import encounter from '../assets/questionmark.png'

const Play = () => {

  const { caught, setCaught, pokemon, entry, range, pokedex, setPokedex } = useContext(PokeContext)

  const handleCaught = (id) => {
    setCaught([...caught, id])
    setPokedex([...pokedex, pokemon])
  }

  const pokeFormat = (pok) => pok.split(" ").join("-").replaceAll(/[.:’']/g, "").replaceAll('\n', '-').replace('♂', '-m').replace('♀', '-f').replaceAll('é', 'e')

  const cleanEntry = (entry) => {
    if (pokeFormat(entry).toLowerCase().includes(pokemon.name.toLowerCase())) {
      const blankedEntry = entry.replaceAll(/[-*\n]/g, ' ').split(" ").map(str => {
        if (pokemon.name.toLowerCase().split('-').includes(pokeFormat(str).toLowerCase())) {
          return "_____"
        }
        else if (str.toLowerCase().includes(pokemon.name.toLowerCase()) && str.includes(",")) {
          return "_____,"
        }
        else if (str.toLowerCase().includes(pokemon.name.toLowerCase()) && str.includes(".")) {
          return "_____."
        }
        else if ((str.split("'").length > 1) && (pokeFormat(str.toLowerCase().split("'")[0]) === pokemon.name.toLowerCase())) {
          return "_____'s"
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
  if (dexCompletion.length === range.max - 1) {
    return <Congrats />
  }

  return (
    <div className="play">
      <div className="play-top">
        <p>
          Read the Pokédex entry below and guess the Pokémon being described to capture it. Spelling counts, but correct answers are not case-sensitive, and punctuation is optional. For example, "Mr. Mime" is the same as "mR MiMe". Nidoran♂ and Nidoran♀ can alternatively be entered as "Nidoran-m" and "Nidoran-f", respectively. You can also select a mode below; 'Easy' shows you an image of the escaping Pokémon after an incorrect guess, 'Hard' does not.
        </p>
        <img
          src={encounter}
          alt="A wild mystery Pokemon appeared!"
          className="play-img"
        />
      </div>
      <span className="entry">{cleanEntry(entry)}</span>
      <br />
      <AnswerForm handleCaught={handleCaught} pokeFormat={pokeFormat} />
      {dexCompletion.length}/{range.max - 1} Pokémon captured
      <br />
      <Toolbar pokemon={pokemon} />
    </div>
  )
}

export default Play
