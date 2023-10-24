import React from 'react'
import Type from './Type'
import missingno from '../assets/missingno.png'

const PokemonCard = ({ pokemon }) => {

  const { number, name, sprite, types } = pokemon
  const borderStyles = {
    borderTopColor: `rgba(var(--${types[0]}), .5)`,
    borderRightColor: `rgba(var(--${types[0]}), .5)`,
    borderLeftColor: `rgba(var(--${types.length > 1 ? types[1] : types[0]}), .5)`,
    borderBottomColor: `rgba(var(--${types.length > 1 ? types[1] : types[0]}), .5)`
  }

  const renderTypes = types.map((t, i) => <Type type={t} key={i} />)

  return (
    <div className="pkm-card" style={borderStyles}>
      <span className="dex-number">#{number}</span>
      <div className='type-container'>{renderTypes}</div>
      <br />
      <img src={sprite || missingno} alt={name} />
      <br />
      <b>{name.charAt(0).toUpperCase() + name.slice(1)}</b>
    </div>
  )
}

export default PokemonCard;