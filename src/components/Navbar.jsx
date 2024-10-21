import React from "react";
import { TiThMenu } from "react-icons/ti";
import logo from "./assets/logo.png";
function Navbar() {
  return (
    <div className="w-screen flex justify-between align-middle items-center px-14">
      <img
        className="h-32"
        src="logo.png"
        alt="logo"
      />
      <h1 className="text-3xl font-bold capitalize">Sanskritik Dharohar evam Sangrahlaya</h1>
      <div className="flex items-center align-middle gap-5">
      <TiThMenu />
      <h3 className="font-light text-3xl">MENU</h3>
      </div>
    </div>
  );
}

export default Navbar;
