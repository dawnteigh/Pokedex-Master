import React from 'react'
import DexButton from './DexButton'
import { dexData } from '../DexData'

const Home = ({ rangeChange }) => {

    const renderButtons = dexData.map(obj => <DexButton key={obj.region} dexData={obj} rangeChange={rangeChange} />)

    return (
    <div className="home">
        <br/>
        <p className="homePara">
            Welcome to Pokédex Master! Upon clicking the play tab above, you will be given a Pokédex entry for a random Pokémon. Your job is simple; guess the Pokémon! Each correct answer 'captures' the Pokémon and adds it to your own Pokédex. The game includes all Pokémon through Generation VIII by default, but if you're unfamiliar with some of the newer ones, don't fret! You can change the size of the Pokédex you want to play with using the buttons below. Happy collecting!
        </p>
        <br/>
        <p><i>Click the button that best represents the breadth of your Pokémon knowledge:</i></p>
        <div className="buttonGrid">
        {renderButtons}
        </div>
    </div>
  )
}

export default Home;