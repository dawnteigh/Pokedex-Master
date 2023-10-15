import React, { useContext } from 'react'
import PokedexMaster from '../PokedexMaster.png'
import NavBar from './NavBar'
import { PokeContext } from '../context/PokeContext'

const Header = () => {

  const { saveFile } = useContext(PokeContext)

  return (
    <div>
      <div id="header">
        <img src={PokedexMaster} alt="Pokedex Master" className="headerImg" />
      </div>
      {saveFile ? <NavBar /> : null}
    </div>
  )
}

export default Header