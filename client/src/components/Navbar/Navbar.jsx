import React from "react";
import "./Navbar.css";
import { SiAbstract } from "react-icons/si";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo-title">
          <SiAbstract className="logo" />
          <h1 className="title">Abstract</h1>
          <a href="">Help Center</a>
        </div>
        <button className="btn">Submit a request</button>
      </div>
    </>
  );
};

export default Navbar;
