import React from 'react'
import missingno from '../assets/missingno.png'

const PokemonCard = ({ pokemon }) => {

  const { number, name, sprite, types } = pokemon
  const borderStyles = {
    borderTopColor: `rgb(var(--${types[0]}))`,
    borderRightColor: `rgb(var(--${types[0]}))`,
    borderLeftColor: `rgb(var(--${types.length > 1 ? types[1] : types[0]}))`,
    borderBottomColor: `rgb(var(--${types.length > 1 ? types[1] : types[0]}))`
  }

  return (
    <div className="pkm-card" style={borderStyles}>
      #{number}
      <br />
      <img src={sprite || missingno} alt={name} />
      <br />
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </div>
  )
}

export default PokemonCard;