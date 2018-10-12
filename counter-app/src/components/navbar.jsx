import React, { Component } from "react";
//stateless functional component
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};
//this keyword no longer required in the sfc as it is passed in the param of the function
/*class NavBar extends Component {
  // state = {};
  render() {
    return null;
  }
}*/

export default NavBar;
