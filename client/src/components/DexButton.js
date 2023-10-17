import React, { useContext } from 'react'
import { PokeContext } from '../context/PokeContext'

const DexButton = ({ dexData }) => {

  const { region, gen, range } = dexData
  const { rangeChange } = useContext(PokeContext)
  return (
    <div className="db-card">
      <p>
        <b>{region} Region</b>
        <br />
        <i>{range.max - 1} Pokémon</i>
      </p>
      <button className="button-2" onClick={(e) => rangeChange(range)} >{gen}</button>
    </div>
  )
}

export default DexButton