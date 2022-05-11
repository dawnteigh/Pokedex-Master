import React, { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'
import { dexData } from '../DexData'
import DexCompletion from './DexCompletion'


const Pokedex = ({ caught }) => {

    const [pokedex, setPokedex] = useState([])
    const [sort, setSort] = useState("order")

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

    const completion = dexData.map(r => {
        return (
            <DexCompletion key={r.region} dex={r} caught={caught} />
        )
    })

    const handleSort = (e) => {
        if (e.target.id === "order") {
            fetch("http://localhost:6001/pokemon")
            .then(r => r.json())
            .then(data => setPokedex(data))
        }
        else if (e.target.id === "alpha") {
            setPokedex(alphaDex)
        }
        else if (e.target.id === "num") {
            setPokedex(numDex)
        }
        setSort(e.target.id)
    }

    const checkedStyle = {
        background: "#ee07e2",
        boxShadow: "rgba(238, 7, 226, 0.35) 0 -25px 18px -14px inset, rgba(238, 7, 226, 0.35) 0 1px 2px, rgba(238, 7, 226, 0.35) 0 2px 4px, rgba(238, 7, 226, 0.35) 0 4px 8px, rgba(238, 7, 226, 0.35) 0 8px 16px, rgba(238, 7, 226, 0.35) 0 16px 32px"
        }

  return (
    <div className="pokedex">
        <h3>Regional Dex Completion Stats</h3>
        <div className="compGrid">
        {completion}
        </div>
        <br/><br/>
        <form>
            <label style={(sort === "order" ? checkedStyle : null)} >
                <input
                type="radio"
                id="order"
                name="sort"
                checked={sort === "order"}
                onChange={handleSort}
                />
                Order Caught
            </label>
            <label style={(sort === "alpha" ? checkedStyle : null)} >
                <input
                type="radio"
                id="alpha"
                name="sort"
                checked={sort === "alpha"}
                onChange={handleSort}
                /> 
                Alphabetical
            </label>
            <label style={(sort === "num" ? checkedStyle : null)} >
                <input
                type="radio"
                id="num"
                name="sort"
                checked={sort === "num"}
                onChange={handleSort}
                />
                Dex Number
            </label>
        </form>
        {(pokedex.length === 0) ? 
        <p>You haven't caught any Pokémon yet!</p> : 
        <div className="pokedexGrid">
            {displayPokedex}
        </div>}
    </div>
  )
}
 export default Pokedex;