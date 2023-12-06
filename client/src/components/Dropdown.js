import React, { useContext } from 'react'
import { PokeContext } from '../context/PokeContext'

const Dropdown = ({ answer, setAnswer }) => {
  const { pokemonList } = useContext(PokeContext)
  const filterNames = pokemonList.filter(name => name.substr(0, answer.length).toLowerCase() === answer.toLowerCase())
  const displayNames = filterNames.map((n, i) => <li key={i} onClick={() => setAnswer(n)}>{n}</li>)
  const show = answer.length > 0 && filterNames[0]?.toLowerCase() !== answer.toLowerCase()

  return (
    <div className='names-wrapper' style={{ display: !show && "none" }}>
      <ul className='names-list'>
        {displayNames}
      </ul>
    </div>
  )
}

export default Dropdown