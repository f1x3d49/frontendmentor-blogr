import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between md:py-12 md:px-36">
      <div className="flex items-center gap-8">
        <Logo className="scale-75" />
        <ul className="flex">
          <li className="p-4">Product</li>
          <li className="p-4">Company</li>
          <li className="p-4">Connect</li>
        </ul>
      </div>
      <div className="flex gap-12">
        <button className="text-white font-ubuntu font-medium">Login</button>
        <button className="rounded-full hover:bg-vlred bg-white shadow-sm font-ubuntu font-medium text-vlred hover:text-white min-w-auto px-8 py-2">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
