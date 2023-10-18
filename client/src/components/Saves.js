import React, { useContext } from 'react'
import { PokeContext } from '../context/PokeContext'
import ProgressBar from './ProgressBar'

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
      <div className={`save file-${i + 1}`} key={i} onClick={() => handleClick(s._id)}>
        <h3>{i + 1}</h3>
        <ul>
          {lastPokemon ? <li>Last Catch: <img src={lastPokemon.sprite} alt={lastPokemon.name} className="animate" /></li> : null}
          <li>Total Pokémon Caught: {s.pokemon.length}</li>
          <li>Pokédex Completion: <ProgressBar height="10%" innerColor="#ee07e2" outerColor="#ccc" progress={percentage} /></li>
        </ul>
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