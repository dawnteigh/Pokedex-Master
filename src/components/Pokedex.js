import React, { useState, useContext } from 'react'
import { PokeContext } from '../context/PokeContext'
import PokemonCard from './PokemonCard'
import { dexData } from '../DexData'
import DexCompletion from './DexCompletion'


const Pokedex = () => {
    const { pokedex, caught, setPokedex, checkedStyle } = useContext(PokeContext)
    const [sort, setSort] = useState("order")
    const [filter, setFilter] = useState("")

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

    const filterPokedex = pokedex.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
    const displayPokedex = filterPokedex.map(p => {
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
            .catch(() => alert('Failed to fetch Pokédex info. Make sure JSON Server is running.'))
        }
        else if (e.target.id === "alpha") {
            setPokedex(alphaDex)
        }
        else if (e.target.id === "num") {
            setPokedex(numDex)
        }
        setSort(e.target.id)
    }

  return (
    <div className="pokedex">
        <div className="compGrid">
            {completion}
        </div>
        <br/>
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
        <br/>
        <input onChange={(e) => setFilter(e.target.value)} type="text" size="45" placeholder="Search Pokémon" />
        {(filterPokedex.length === 0 && pokedex.length > 0) ? <p>You haven't caught any Pokémon that match your query!</p> : null}
        {(pokedex.length === 0) ? 
        <p>You haven't caught any Pokémon yet!</p> : 
        <div className="pokedexGrid">
            {displayPokedex}
        </div>}
    </div>
  )
}
 export default Pokedex;