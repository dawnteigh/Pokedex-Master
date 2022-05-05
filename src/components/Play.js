import React, { useState, useEffect } from "react";
import AnswerForm from './AnswerForm'

const Play = ({ range }) => {
  const { min, max } = range
  const [pokemon, setPokemon] = useState({
    id: "",
    name: "",
    sprite: "",
  });
  const [entry, setEntry] = useState("")

  const newPokemon = () => {
    const dexNo = Math.floor(Math.random() * (max - min) + min)
    fetch(`https://pokeapi.co/api/v2/pokemon/${dexNo}`)
      .then(r => r.json())
      .then(data =>
        setPokemon({
          id: data.id,
          name: data.species.name,
          sprite: data.sprites.front_default
        })
      )
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${dexNo}`)
        .then(r => r.json())
        .then(data => {
            const entry = data.flavor_text_entries.find(e => e.language.name === 'en')
            setEntry(entry.flavor_text)
        })
  }

  

  useEffect(() => {
    newPokemon()
  }, []);

  return (
    <div>
        <br/>
        {entry}
        <br/><br/>
        <AnswerForm pokemon={pokemon} newPokemon={newPokemon} />
    </div>
    )
}

export default Play
