import React, { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'

const Pokedex = () => {

    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        fetch("http://localhost:6001/pokemon")
        .then(r => r.json())
        .then(data => setPokedex(data))
    }, [])

    const displayPokedex = pokedex.map(p => {
        return (
            <PokemonCard key={p.id} pokemon={p} />
        )
    })

  return (
    <div>
        {(pokedex.length === 0) ? <p>You haven't captured any Pokemon yet!</p> : {displayPokedex}}
    </div>
  )
}
 export default Pokedex;