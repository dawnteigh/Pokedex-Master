import React, { useContext } from 'react'
import { PokeContext } from '../context/PokeContext'

const Saves = () => {
  const { user, setSaveFile } = useContext(PokeContext)
  if (!user.saves) return <h1>Loading...</h1>
  const displaySaves = user.saves.map((s, i) => {
    const percentage = Math.floor((100 * s.pokemon.length) / 1017)
    return (
      <div className={`save file-${i + 1}`} key={i} onClick={() => setSaveFile(s._id)}>
        <h3>{`Save File ${i + 1}`}</h3>
        Completion: {percentage}%
      </div>
    )
  })
  return (
    <div id="saves">
      {displaySaves}
    </div>
  )
}

export default Saves