import React, { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'


const Pokedex = () => {

    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        fetch("http://localhost:6001/pokemon")
        .then(r => r.json())
        .then(data => setPokedex(data))
    }, [])

    const numDex = pokedex.slice().sort((a, b) => a.id - b.id)
    const alphaDex = pokedex.slice().sort((a, b) => {
        let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });

    const displayPokedex = pokedex.map(p => {
        return (
            <PokemonCard key={p.id} pokemon={p} />
        )
    })

    const handleSort = (e) => {
        if (e.target.id === "alpha") {
            setPokedex(alphaDex)
        }
        else if (e.target.id === "num") {
            setPokedex(numDex)
        }
    }

  return (
    <div>
        <div onChange={handleSort} >
            Sort By:
            <br/>
            <input type="radio" id="alpha" name="sort" /> Alphabetical
            <input type="radio" id="num" name="sort" /> Dex Number
        </div>
        {(pokedex.length === 0) ? 
        <p>You haven't caught any Pokemon yet!</p> : 
        <div className="pokedex">{displayPokedex}</div>}
    </div>
  )
}
 export default Pokedex;