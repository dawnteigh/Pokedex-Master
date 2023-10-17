import React, { useContext } from 'react'
import PokedexMaster from '../PokedexMaster.png'
import NavBar from './NavBar'
import { PokeContext } from '../context/PokeContext'

const Header = () => {

  const { user, saveFile, setSaveFile, updateSaves, logout, history } = useContext(PokeContext)

  const handleClick = () => {
    setSaveFile(false)
    updateSaves()
    history.push("/")
  }

  return (
    <div id="header">
      <div className="header-top">
        <img src={PokedexMaster} alt="Pokedex Master" className="header-img" />
      </div>
      {saveFile ? <NavBar /> : null}
      <div className="header-btns">
        {saveFile ? <button className="button-2" onClick={() => handleClick()}>Switch Save</button> : null}
        {user ? <button className="button-2" onClick={() => logout()}>Logout</button> : null}
      </div>
    </div>
  )
}

export default Header