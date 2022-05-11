import React from 'react'

const DexButton = ({ dexData, rangeChange }) => {

  const { region, gen, range } = dexData

  return (
    <div>
        <p>
            {region} Region
            <br/>
            {range.max - 1} Pokémon
        </p>
        <button onClick={(e) => rangeChange(range)} >{gen}</button>
    </div>
  )
}

export default DexButton