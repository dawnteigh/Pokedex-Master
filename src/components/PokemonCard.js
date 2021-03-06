import React from 'react'

const PokemonCard = ({ pokemon }) => {

  const { id, name, sprite } = pokemon

  return (
    <div className="pkmCard">
      #{id}
      <br/>
      <img src={sprite} alt={name} />
      <br/>
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </div>
  )
}

export default PokemonCard;