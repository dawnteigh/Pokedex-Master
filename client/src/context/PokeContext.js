import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { PaldeaEntries } from "../data/PaldeaEntries";
import Pokedex from 'pokedex-promise-v2';

const PokeContext = React.createContext();

function PokeProvider({ children }) {

  const [user, setUser] = useState(false)
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(false)
  const [saveFile, setSaveFile] = useState(false)

  const [pokedex, setPokedex] = useState([])
  const [pokemon, setPokemon] = useState({
    number: "",
    name: "",
    sprite: "",
    types: []
  });
  const [entry, setEntry] = useState("")
  const [caught, setCaught] = useState([])
  const [range, setRange] = useState({
    min: 1,
    max: 1018
  })
  const [mode, setMode] = useState("easy")
  const [pokemonList, setPokemonList] = useState([])
  const { min, max } = range

  const PokeAPI = new Pokedex();

  const history = useHistory()

  useEffect(() => {
    fetch("/api/me")
      .then(r => r.json())
      .then(data => {
        if (data.error) {
          history.push("/")
        }
        else {
          setUser(data)
          if (data.save_file) {
            setSaveFile(data.save_file)
          }
        }
      })
  }, [])

  useEffect(() => {
    async function getPokemonNames() {
      const response = await PokeAPI.getPokemonSpeciesList()
      const pokemonNames = response.results.map(p => p.name)
      setPokemonList(pokemonNames)
    }
    if (user) {
      getPokemonNames();
    }

  }, [user])

  const logout = () => {
    fetch('/api/logout', {
      method: "DELETE"
    })
      .then(() => {
        setSaveFile(false)
        setUser(false)
        history.push("/")
      })
  }

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
            number: data.id,
            name: data.species.name,
            sprite: data.sprites.front_default,
            types: data.types.map(t => t.type.name)
          })
        )
        .catch(() => setErrors("Communication with PokeAPI failed. Refresh to try again."))
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
          .catch(() => setErrors("Communication with PokeAPI failed. Refresh to try again."))
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

  const clearDex = async () => {
    const r = await fetch(`/api/pokedex/${saveFile}/pokemon`, {
      method: 'DELETE'
    })
    const response = await r.json()
    if (response.error) {
      setErrors(response.error)
    } else {
      setErrors(response.message)
      setPokedex([])
      setCaught([])
    }
  }

  useEffect(() => {
    if (saveFile) {
      fetch(`/api/pokedex/${saveFile}`)
        .then(r => r.json())
        .then(data => {
          if (data.error) {
            setErrors(data.error)
          }
          setPokedex(data.pokemon)
          setCaught(data.pokemon.map(p => p.number))
        })
    }
  }, [saveFile])

  useEffect(() => {
    const dexCompletion = caught.filter(num => num < range.max)
    if (dexCompletion.length !== range.max - 1) {
      newPokemon()
    }
  }, [caught, range])

  const updateSaves = async () => {
    const r = await fetch('/api/saves')
    const updated = await r.json()
    setUser(updated)
  }

  return (
    <PokeContext.Provider
      value={{
        user,
        setUser,
        errors,
        setErrors,
        loading,
        setLoading,
        saveFile,
        setSaveFile,
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
        checkedStyle,
        clearDex,
        logout,
        updateSaves,
        history,
        pokemonList
      }}>
      {children}
    </PokeContext.Provider>
  )
}

export { PokeContext, PokeProvider }