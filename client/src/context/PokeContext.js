import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { PaldeaEntries } from "../PaldeaEntries";

const PokeContext = React.createContext();

function PokeProvider({ children }) {

  const [pokedex, setPokedex] = useState([])
  const [pokemon, setPokemon] = useState({
    id: "",
    name: "",
    sprite: "",
    types: []
  });
  const [entry, setEntry] = useState("")
  const [caught, setCaught] = useState([])
  const [range, setRange] = useState({
    min: 1,
    max: 1011
  })
  const [mode, setMode] = useState("easy")
  const { min, max } = range

  const history = useHistory()
  const checkedStyle = {
    background: "#ee07e2",
    boxShadow: "rgba(238, 7, 226, 0.35) 0 -25px 18px -14px inset, rgba(238, 7, 226, 0.35) 0 1px 2px, rgba(238, 7, 226, 0.35) 0 2px 4px, rgba(238, 7, 226, 0.35) 0 4px 8px, rgba(238, 7, 226, 0.35) 0 8px 16px, rgba(238, 7, 226, 0.35) 0 16px 32px"
    }
    
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
            types: data.types.map(t => t.type.name)
          })
        )
        .catch(() => alert('Failed to fetch Pokémon. Refresh to try again.'))
        if (dexNo > 905) {
          const pkmn = PaldeaEntries.find(p => p.number === dexNo)
          const entry = pkmn.entries[Math.floor(Math.random() * pkmn.entries.length)]
          setEntry(entry)
        }
        else {
          fetch(`https://pokeapi.co/api/v2/pokemon-species/${dexNo}`)
            .then(r => r.json())
            .then(data => {
              if (!data.flavor_text_entries[0]) {
                setEntry('This Pokémon has no Pokédex entries yet! Use the hints below to guess.')
              }
              else {
                const entries = data.flavor_text_entries.filter(e => e.language.name === 'en')
                const randomEntry = entries[Math.floor(Math.random() * entries.length)]
                setEntry(randomEntry.flavor_text)
              }
            })
            .catch(() => alert('Failed to fetch Pokédex entry. Refresh to try again.'))
        }
    }
    else {
      newPokemon()
    }
  }
  
  const rangeChange = (obj) => {
    setRange(obj)
    history.push('/play')
  }

  useEffect(() => {
    fetch("http://localhost:6001/pokemon")
    .then(r => r.json())
    .then(data => {
      setPokedex(data)
      setCaught(data.map(d => d.id))
    })
    .catch(() => alert('Failed to fetch local Pokédex info. Make sure JSON Server is running.'))
  }, [])

  useEffect(() => {
    const dexCompletion = caught.filter(num => num < range.max)
    if (dexCompletion.length !== range.max - 1) {
      newPokemon()
    }
  }, [caught, range])

  return (
  <PokeContext.Provider
  value={{ 
    pokedex,
    setPokedex,
    pokemon,
    setPokemon,
    entry,
    setEntry,
    caught,
    setCaught,
    range,
    setRange,
    rangeChange,
    mode,
    setMode,
    newPokemon,
    checkedStyle
    }}>
    {children}
  </PokeContext.Provider>
  )
}

export { PokeContext, PokeProvider}