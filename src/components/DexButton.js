import React from 'react'

const DexButton = ({ dexData }) => {

const { region, gen, range } = dexData
  return (
    <div>
        <p>
            {region} Region
            <br/>
            {range.max - 1} Pokemon
        </p>
        <button>{gen}</button>
    </div>
  )
}

export default DexButton