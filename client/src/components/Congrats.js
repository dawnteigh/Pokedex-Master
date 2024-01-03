import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PokeContext } from '../context/PokeContext'

const Congrats = () => {

  const { caught } = useContext(PokeContext)

  if (caught.length === 1025) {
    return (
      <div className='congrats'>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7abcb25d-9553-4159-8c6c-ed391a051d51/dfd2r9u-64149588-094b-4d12-bdc2-2cd213cf5d21.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdhYmNiMjVkLTk1NTMtNDE1OS04YzZjLWVkMzkxYTA1MWQ1MVwvZGZkMnI5dS02NDE0OTU4OC0wOTRiLTRkMTItYmRjMi0yY2QyMTNjZjVkMjEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iIrCb0AazQrKTnhWhSioEE1ktwYlnCaSWG1hYj9w1SI" alt="" />
        Congratulations, you've caught every Pokémon! That must have taken you hours... To keep playing, you can either switch to a different save file or head over to your <Link to='/pokedex'>Pokédex</Link> and clear it. Every Pokémon has at least two unique entries, so your experience should be different each time you play through!
      </div>
    )
  }

  return (
    <div className='congrats'>
      <img src="https://media.tenor.com/qObvHG4rT28AAAAC/pikachu-pokemon.gif" alt="" />
      Congratulations, you've caught every Pokémon in your selected range! Try <Link to='/'>expanding your range</Link>, or clear your <Link to='/pokedex'>Pokédex</Link> to play again. Every Pokémon has at least two unique entries, so your experience should be different each time you play through!
    </div>
  )
}

export default Congrats