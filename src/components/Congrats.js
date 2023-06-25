import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PokeContext } from '../context/PokeContext'

const Congrats = () => {

  const { caught } = useContext(PokeContext)

  if (caught.length === 1010) {
    return (
    <div>Congratulations, you've caught every Pokémon! That must have taken you hours... If you want to play again, just head over to your <Link to='/pokedex'>Pokédex</Link> and clear it. Every Pokémon has at least two unique entries, so your experience should be different each time you play through!</div>
    )
  }
  
  return (
    <div>Congratulations, you've caught every Pokémon in your selected range! Try <Link to='/'>expanding your range</Link>, or clear your <Link to='/pokedex'>Pokédex</Link> to play again. Every Pokémon has at least two unique entries, so your experience should be different each time you play through!</div>
  )
}

export default Congrats