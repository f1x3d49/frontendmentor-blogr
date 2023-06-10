import React from "react";
import phones from "../images/illustration-phones.svg";
import circles from "../images/bg-pattern-circles.svg";

const PhoneSection = () => {
  return (
    <section className="flex w-full bg-gradient-to-r from-[#2c2d3f] to-[#3f4164] md:h-[400px] md:mt-36 overflow-hidden rounded-tr-[6rem] rounded-bl-[6rem]">
      <div>
        <img
          src={circles}
          alt="circles"
          className="relative z-0 origin-top md:ml-64 rotate-90"
        />
        <img
          src={phones}
          alt="phones"
          className="absolute md:top-[1125px] md:left-24"
        />
      </div>
      <div className="h-full aboslute text-left font-overpass font-semibold flex flex-col justify-center gap-6">
        <h1 className="text-white text-4xl">State of the Art Infrastructure</h1>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast conectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </section>
  );
};

export default PhoneSection;
