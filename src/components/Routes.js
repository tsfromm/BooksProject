import React from "react";
import { NavLink } from "react-router-dom";


const Navigation = () => {
  return (
    <div>
      <NavLink to="/Bookshelf">Home</NavLink>
      <NavLink to="/Bookshelf2">Bookshelf2</NavLink>
    </div>
  );
};

export default Navigation;