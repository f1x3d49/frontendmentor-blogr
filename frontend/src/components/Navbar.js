import React, { useState } from "react";
import { Popover } from "@headlessui/react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Hamburger } from "../images/icon-hamburger.svg";
import { ReactComponent as Close } from "../images/icon-close.svg";
import { ReactComponent as ArrowD } from "../images/icon-arrow-dark.svg";
import MobileDropdown from "./MobileDropdown";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  return (
    <div className="w-full flex items-center justify-between py-10 px-8 md:py-12 md:px-36">
      <div className="flex items-center gap-8">
        <Logo className="scale-75" />
        <ul className="hidden md:flex">
          <li className="p-4">Product</li>
          <li className="p-4">Company</li>
          <li className="p-4">Connect</li>
        </ul>
      </div>
      <div className="hidden md:flex gap-12">
        <button className="text-white font-ubuntu font-medium">Login</button>
        <button className="rounded-full hover:bg-vlred bg-white shadow-sm font-ubuntu font-medium text-vlred hover:text-white min-w-auto px-8 py-2">
          Sign Up
        </button>
      </div>
      <Popover as="div" className="block md:hidden">
        <Popover.Button
          onClick={() => {
            setNav(!nav);
          }}
        >
          {nav ? (
            <Hamburger className="ease-out duration-500" />
          ) : (
            <Close className="ease-out duration-500" />
          )}
        </Popover.Button>
        <Popover.Panel className="absolute z-10 bg-white top-24 left-0 ml-12 w-[300px] max-h-96 rounded-md shadow-md px-4">
          <div className="flex flex-col items-center justify-center">
            <ul className="flex flex-col">
              <li className="flex items-center justify-center gap-2 p-1 hover:cursor-pointer">
                <p className="text-[16px] font-ubuntu font-medium text-vdbblue">
                  Product
                </p>
                <ArrowD className="mt-1" />
              </li>
              <li className="flex items-center justify-center gap-2 p-1 hover:cursor-pointer">
                <p className="text-[16px] font-ubuntu font-medium text-vdbblue">
                  Company
                </p>
                <ArrowD className="mt-1" />
              </li>
              <li className="p-1">
                <MobileDropdown />
              </li>
            </ul>
            <div className="w-full border-t-[1px] border-gblue flex flex-col">
              <button>Login</button>
              <button>Sign Up</button>
            </div>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
};

export default Navbar;
