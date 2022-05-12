import React from 'react'

const DexButton = ({ dexData, rangeChange }) => {

  const { region, gen, range } = dexData

  return (
    <div className="dbCard">
        <p style={{ margin: 0 }}>
            <b>{region} Region</b>
            <br/>
            <i>{range.max - 1} Pokémon</i>
        </p>
        <button className="button" onClick={(e) => rangeChange(range)} >{gen}</button>
    </div>
  )
}

export default DexButton