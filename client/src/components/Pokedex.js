import React, { useState, useContext, useEffect } from 'react'
import { PokeContext } from '../context/PokeContext'
import PokemonCard from './PokemonCard'
import { dexData } from '../DexData'
import DexCompletion from './DexCompletion'
import Modal from 'react-bootstrap/Modal'


const Pokedex = () => {
  const { pokedex, caught, checkedStyle, clearDex } = useContext(PokeContext)
  const [sort, setSort] = useState("num")
  const [filter, setFilter] = useState("")
  const [sortedDex, setSortedDex] = useState([])
  const [show, setShow] = useState(false)

  const numDex = pokedex.slice().sort((a, b) => a.number - b.number)
  const alphaDex = pokedex.slice().sort((a, b) => {
    let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
  const recentDex = pokedex.toReversed()

  useEffect(() => setSortedDex(numDex), [pokedex])

  const filterPokedex = sortedDex.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
  const displayPokedex = filterPokedex.map(p => {
    return (
      <PokemonCard key={p.number} pokemon={p} />
    )
  })

  const completion = dexData.map(r => {
    return (
      <DexCompletion key={r.region} dex={r} caught={caught} />
    )
  })

  const handleSort = (e) => {
    if (e.target.id === "recent") {
      setSortedDex(recentDex)
    }
    else if (e.target.id === "alpha") {
      setSortedDex(alphaDex)
    }
    else if (e.target.id === "num") {
      setSortedDex(numDex)
    }
    setSort(e.target.id)
  }

  const handleClear = () => {
    clearDex()
    setShow(false)
  }

  return (
    <div className="pokedex">
      <Modal style={{ textAlign: "center" }} show={show} onHide={() => setShow(false)} centered>
        <Modal.Header className="msg-header" closeButton>
          <Modal.Title>Pokédex Master</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you wish to empty the Pokédex? This would mean starting all over!</p>
          <button float='left' className='button left' onClick={() => handleClear()}>I'm sure!</button>
          <button className='button right' onClick={() => setShow(false)}>Wait, no!</button>
        </Modal.Body>
      </Modal>
      <div className="compGrid">
        {completion}
      </div>
      <br />
      <form>
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
        <label style={(sort === "recent" ? checkedStyle : null)} >
          <input
            type="radio"
            id="recent"
            name="sort"
            checked={sort === "recent"}
            onChange={handleSort}
          />
          Most Recent
        </label>
      </form>
      <br />
      <input onChange={(e) => setFilter(e.target.value)} type="text" size="45" placeholder="Search Pokémon" />
      <br />
      {(filterPokedex.length === 0 && pokedex.length > 0) ? <p>You haven't caught any Pokémon that match your query!</p> : null}
      {
        (pokedex.length === 0) ?
          <p>You haven't caught any Pokémon yet!</p> :
          <>
            <button className='button delete' onClick={() => setShow(true)}>Clear Pokédex</button>
            <div className="pokedexGrid">
              {displayPokedex}
            </div>
          </>
      }
    </div>
  )
}
export default Pokedex;