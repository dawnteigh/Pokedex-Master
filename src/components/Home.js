import React from 'react'
import DexButton from './DexButton'
import { dexData } from '../DexData'

const Home = () => {

    console.log(dexData)
    const renderButtons = dexData.map(obj => <DexButton key={obj.region} dexData={obj} />)
  return (
    <div>
        <p>
            Welcome to Pokedex Master! Upon clicking the play tab above, you will be given a Pokedex entry for a random Pokemon. Your job is simple; guess the Pokemon! Each correct answer 'captures' the Pokemon and adds it to your own Pokedex. The game includes all Pokemon through Generation VIII by default, but if you're unfamiliar with some of the newer ones, don't fret! You can change the size of the Pokedex you want to play with using the buttons below. Happy collecting!
        </p>
        {renderButtons}
    </div>
  )
}

export default Home;