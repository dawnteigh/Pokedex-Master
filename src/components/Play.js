import React, { useState, useEffect } from "react";
import AnswerForm from './AnswerForm'

const Play = ({ range }) => {
  const { min, max } = range
  const [pokemon, setPokemon] = useState({
    id: "",
    name: "",
    sprite: "",
    types: [{"type": {}}]
  });
  const [entry, setEntry] = useState("")
  const [caught, setCaught] = useState([])
  const [showHints, setShowHints] = useState(false)

  const newPokemon = () => {
    let dexNo = Math.floor(Math.random() * (max - min) + min)
    if (!caught.includes(dexNo)) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${dexNo}`)
      .then(r => r.json())
      .then(data =>
        setPokemon({
          id: data.id,
          name: data.species.name,
          sprite: data.sprites.front_default,
          types: data.types
        })
      )
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${dexNo}`)
        .then(r => r.json())
        .then(data => {
            const entries = data.flavor_text_entries.filter(e => e.language.name === 'en')
            const randomEntry = entries[Math.floor(Math.random() * entries.length)]
            setEntry(randomEntry.flavor_text)
        })
      } else {
        newPokemon()
      }
  }

  const handleCaught = (id) => {
    setCaught([...caught, id])
  }

  const caughtArray = []

  useEffect(() => {
    fetch('http://localhost:6001/pokemon')
    .then(r => r.json())
    .then(data => {
      data.forEach(p => caughtArray.push(p.id))
    })
    .then(() => {
    setCaught(caughtArray)
    newPokemon()
    })
  }, []);

  const safeEntry = entry.toLowerCase().replaceAll(pokemon.name.toLowerCase(), "_____");
  const dexCompletion = caught.filter(num => num < max)
  const toggleHints = () => setShowHints(!showHints)

  return (
    <div>
        <br/>
        {(entry.toLowerCase().includes(pokemon.name.toLowerCase())) ? safeEntry.charAt(0).toUpperCase() + safeEntry.slice(1) : entry}
        <br/><br/>
        <AnswerForm pokemon={pokemon} newPokemon={newPokemon} handleCaught={handleCaught} />
        {dexCompletion.length}/{max - 1} Pokemon captured
        <br/><br/>
        <button onClick={toggleHints} >{!showHints ? "Show Hints" : "Hide Hints"}</button>
        <div style={{display: !showHints ? "none" : "block"}}>
        This Pokemon is {(pokemon.types.length > 1) ? pokemon.types[0].type.name + "/" + pokemon.types[1].type.name : pokemon.types[0].type.name} type.
        <br/>
        Its name starts with '{pokemon.name.charAt(0).toUpperCase()}'.
        </div>
    </div>
    )
}

export default Play
