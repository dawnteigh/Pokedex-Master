import React, { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  const { setSaveFile, updateSaves, logout, history } = useContext(PokeContext)
  const handleClick = () => {
    setSaveFile(false)
    updateSaves()
    history.push("/")
  }

  const active = {
    background: "#ee07e2",
    boxShadow: "rgba(238, 7, 226, 0.35) 0 -25px 18px -14px inset, rgba(238, 7, 226, 0.35) 0 1px 2px, rgba(238, 7, 226, 0.35) 0 2px 4px, rgba(238, 7, 226, 0.35) 0 4px 8px, rgba(238, 7, 226, 0.35) 0 8px 16px, rgba(238, 7, 226, 0.35) 0 16px 32px"
  }

  return (
    <div id="navbar">
      <NavLink
        to="/"
        exact
        className="nav-tab"
        activeStyle={active}
      >
        Home
      </NavLink>
      <NavLink
        to="/play"
        exact
        className="nav-tab"
        activeStyle={active}
      >
        Play
      </NavLink>
      <NavLink
        to="/pokedex"
        exact
        className="nav-tab"
        activeStyle={active}
      >
        Pokédex
      </NavLink>
      <div className="nav-btns">
        <button className="button-2" onClick={() => handleClick()}>Switch Save</button>
        <button className="button-2" onClick={() => logout()}>Logout</button>
      </div>
    </div>
  );
}

export default NavBar;