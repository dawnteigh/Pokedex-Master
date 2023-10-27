import React, { useContext } from 'react'
import Saves from './Saves';
import DexButton from './DexButton'
import { dexData } from '../data/DexData'
import { PokeContext } from '../context/PokeContext'
import FrontPage from './FrontPage';

const Home = () => {

  const { user, saveFile } = useContext(PokeContext)

  if (!user) {
    return (
      <FrontPage />
    )
  }

  if (!saveFile) {
    return <Saves />
  }

  const renderButtons = dexData.map(obj => <DexButton key={obj.region} dexData={obj} />)

  return (
    <div className="home">
      <br />
      <p className="text-container">
        Welcome to Pokédex Master! Upon clicking the "Play" tab above, you will be given a Pokédex entry for a random Pokémon. Your job is simple; guess the Pokémon! Each correct answer 'captures' the Pokémon and adds it to your own Pokédex. The game includes all Pokémon through Generation IX by default, but if you're unfamiliar with some of the newer ones, don't fret! You can change the size of the Pokédex you want to play with using the buttons below. Happy collecting!
      </p>
      <br />
      <p className='text-container'>
        <i>Click the button that best represents the breadth of your Pokémon knowledge:</i>
      </p>
      <div className="button-grid">
        {renderButtons}
      </div>
    </div>
  )
}

export default Home;