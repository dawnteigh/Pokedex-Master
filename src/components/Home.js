import React from 'react'
import DexButton from './DexButton'
import { dexData } from '../DexData'

const Home = () => {

    const renderButtons = dexData.map(obj => <DexButton key={obj.region} dexData={obj} />)

    return (
    <div className="home">
        <p>
            Welcome to Pokedex Master! Upon clicking the play tab above, you will be given a Pokedex entry for a random Pokemon. Your job is simple; guess the Pokemon! Each correct answer 'captures' the Pokemon and adds it to your own Pokedex. The game includes all Pokemon through Generation VIII by default, but if you're unfamiliar with some of the newer ones, don't fret! You can change the size of the Pokedex you want to play with using the buttons below. Happy collecting!
        </p>
        <br/>
        <p>Click the button that best represents the breadth of your Pokemon knowledge:</p>
        <div className="buttonGrid">
        {renderButtons}
        </div>
    </div>
  )
}

export default Home;