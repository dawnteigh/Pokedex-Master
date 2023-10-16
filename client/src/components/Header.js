import React, { useContext } from 'react'
import PokedexMaster from '../PokedexMaster.png'
import NavBar from './NavBar'
import { PokeContext } from '../context/PokeContext'

const Header = () => {

  const { saveFile } = useContext(PokeContext)

  return (
    <div id="header">
      <div className="header-top">
        <img src={PokedexMaster} alt="Pokedex Master" className="header-img" />
      </div>
      {saveFile ? <NavBar /> : null}
    </div>
  )
}

export default Header