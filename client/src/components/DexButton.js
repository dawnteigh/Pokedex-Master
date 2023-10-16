import React, { useContext } from 'react'
import { PokeContext } from '../context/PokeContext'

const DexButton = ({ dexData }) => {

  const { region, gen, range } = dexData
  const { rangeChange } = useContext(PokeContext)
  return (
    <div className="db-card">
      <p style={{ margin: 0 }}>
        <b>{region} Region</b>
        <br />
        <i>{range.max - 1} Pokémon</i>
      </p>
      <button className="button" onClick={(e) => rangeChange(range)} >{gen}</button>
    </div>
  )
}

export default DexButton