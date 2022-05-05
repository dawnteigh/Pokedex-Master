import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "75px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#b644fc",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#6e02b1",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/play"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#6e02b1",
        }}
      >
        Play
      </NavLink>
      <NavLink
        to="/pokedex"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#6e02b1",
        }}
      >
        Pokedex
      </NavLink>
    </div>
  );
}

export default NavBar;