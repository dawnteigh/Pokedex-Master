import React, { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import { NavLink } from "react-router-dom";
import PokedexMaster from '../PokedexMaster.png'

const NavBar = () => {

  const { setSaveFile, logout } = useContext(PokeContext)

  const active = {
    background: "#ee07e2",
    boxShadow: "rgba(238, 7, 226, 0.35) 0 -25px 18px -14px inset, rgba(238, 7, 226, 0.35) 0 1px 2px, rgba(238, 7, 226, 0.35) 0 2px 4px, rgba(238, 7, 226, 0.35) 0 4px 8px, rgba(238, 7, 226, 0.35) 0 8px 16px, rgba(238, 7, 226, 0.35) 0 16px 32px"
  }

  return (
    <div className="navBar">
      <div className="header">
        <img src={PokedexMaster} alt="Pokedex Master" className="headerImg" />
      </div>
      <NavLink
        to="/"
        exact
        className="navTab"
        activeStyle={active}
      >
        Home
      </NavLink>
      <NavLink
        to="/play"
        exact
        className="navTab"
        activeStyle={active}
      >
        Play
      </NavLink>
      <NavLink
        to="/pokedex"
        exact
        className="navTab"
        activeStyle={active}
      >
        Pokédex
      </NavLink>
      <div className="nav-btns">
        <button onClick={() => setSaveFile(false)}>Switch Save</button>
        |
        <button onClick={() => logout()}>Logout</button>
      </div>
    </div>
  );
}

export default NavBar;