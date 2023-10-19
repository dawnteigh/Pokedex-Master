import React, { useContext } from 'react'
import { PokeContext } from '../context/PokeContext'
import ProgressBar from './ProgressBar'
import missingno from '../assets/missingno.png'

const Saves = () => {
  const { user, setSaveFile } = useContext(PokeContext)
  if (!user.saves) return <h1>Loading...</h1>

  const handleClick = async (id) => {
    const r = await fetch(`/api/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id
      })
    })
    const currentSave = await r.json()
    setSaveFile(currentSave)
  }

  const displaySaves = user.saves.map((s, i) => {
    const percentage = Math.floor((100 * s.pokemon.length) / 1017)
    const lastPokemon = s.pokemon[s.pokemon.length - 1]
    return (
      <div className={lastPokemon ? `save ${lastPokemon.types[0]}` : "save"} key={i} onClick={() => handleClick(s._id)}>
        <h3>{i + 1}</h3>
        <div className="save-info">
          <span>
            <img src={lastPokemon ? lastPokemon.sprite : missingno} alt={lastPokemon ? lastPokemon.name : "missingno"} className="animate" />
          </span>
          <span>Total Pokémon Caught: {s.pokemon.length}</span>
          <span>Pokédex Completion: <ProgressBar height={20} innerColor="#ee07e280" outerColor="#ccc" progress={percentage} /></span>
        </div>
      </div>
    )
  })
  return (
    <div id="saves">
      <p>Hello, <span className="stylize">{user.username.charAt(0).toUpperCase() + user.username.slice(1)}</span>! Below are your three personal save files. Select one to start playing!</p>
      <div className="save-container">
        {displaySaves}
      </div>
    </div>
  )
}

export default Saves