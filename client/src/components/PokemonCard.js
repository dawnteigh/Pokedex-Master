import React from 'react'
import missingno from '../assets/missingno.png'

const PokemonCard = ({ pokemon }) => {

  const { number, name, sprite } = pokemon

  return (
    <div className="pkm-card">
      #{number}
      <br />
      <img src={sprite || missingno} alt={name} />
      <br />
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </div>
  )
}

export default PokemonCard;