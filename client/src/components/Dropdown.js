import React, { useContext } from 'react'
import { PokeContext } from '../context/PokeContext'

const Dropdown = ({ answer, setAnswer }) => {
  const { pokemonList } = useContext(PokeContext)
  const filterNames = pokemonList.filter(name => name.toLowerCase().match(answer.toLowerCase()))
  const displayNames = filterNames.map(n => <li onClick={() => setAnswer(n)}>{n}</li>)

  return (
    <div>
      <ul>
        {answer.length > 0 && filterNames[0]?.toLowerCase() !== answer.toLowerCase() && displayNames}
      </ul>
    </div>
  )
}

export default Dropdown