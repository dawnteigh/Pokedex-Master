import React from "react";
import { NavLink } from "react-router-dom";
import PokedexMaster from '../PokedexMaster.png'

const active = { background: "#ee07e2",
boxShadow: "rgba(238, 7, 226, 0.35) 0 -25px 18px -14px inset, rgba(238, 7, 226, 0.35) 0 1px 2px, rgba(238, 7, 226, 0.35) 0 2px 4px, rgba(238, 7, 226, 0.35) 0 4px 8px, rgba(238, 7, 226, 0.35) 0 8px 16px, rgba(238, 7, 226, 0.35) 0 16px 32px" }

function NavBar() {
  return (
    <div>
      <div className="header">
        <img src={PokedexMaster} alt="Pokedex Master" />
      </div>
      <NavLink
        to="/"
        exact
        className="navButton"
        activeStyle={active}
      >
        Home
      </NavLink>
      <NavLink
        to="/play"
        exact
        className="navButton"
        activeStyle={active}
      >
        Play
      </NavLink>
      <NavLink
        to="/pokedex"
        exact
        className="navButton"
        activeStyle={active}
      >
        Pokédex
      </NavLink>
    </div>
  );
}

export default NavBar;