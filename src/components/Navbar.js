import React from 'react';
import { NavLink } from "react-router-dom";


export function Navbar() {
   return (
      <nav className="navbar">
         <NavLink className="navItem" to="/">Shop</NavLink>
         <NavLink className="navItem" to="/cart">Cart</NavLink>
      </nav>
   )
}



