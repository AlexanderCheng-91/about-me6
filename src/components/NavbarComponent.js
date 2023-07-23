import React from 'react';
import {  Link } from "react-router-dom";

//pictures
import homeIcon from "../assets/icons/brandImage.svg"

//navbar
import { Navbar } from 'reactstrap';
const NavbarComponent= () =>{
  return (
  <div>
    <Navbar>
      <img 
        src = {homeIcon}
        width="10%"
      />
      <li>
        <Link to="/">Dogs</Link>
      </li>
      <li>
        <Link to="/cats">Cats</Link>
      </li>
      <li>
        <Link to="/sheeps">Sheeps</Link>
      </li>
      <li>
        <Link to="/goats">Goats</Link>
      </li>
    </Navbar>
  </div>
  );
}
export default NavbarComponent;