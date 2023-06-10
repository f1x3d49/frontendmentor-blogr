import React from "react";
import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <section className="w-full h-auto bg-vdbblue flex flex-col md:flex-row md:items-start items-center justify-center rounded-tr-[6rem] md:gap-64 gap-12 py-10 md:py-16 md:pr-36 px-12">
      <img src={logo} alt="logo" />
      <div className="flex flex-col gap-6 text-center font-overpass">
        <p className="text-white font-semibold">Product</p>
        <div className="flex flex-col gap-1 md:gap-2 text-gblue">
          <p>Overview</p>
          <p>Pricing</p>
          <p>Marketplace</p>
          <p>Features</p>
          <p>Integrations</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 text-center font-overpass">
        <p className="text-white font-semibold">Company</p>
        <div className="flex flex-col gap-1 md:gap-2 text-gblue">
          <p>About</p>
          <p>Team</p>
          <p>Blog</p>
          <p>Careers</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 text-center font-overpass">
        <p className="text-white font-semibold">Connect</p>
        <div className="flex flex-col gap-1 md:gap-2 text-gblue">
          <p>Contact</p>
          <p>Newsletter</p>
          <p>LinkedIn</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
