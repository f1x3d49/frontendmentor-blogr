import React from "react";
import phones from "../images/illustration-phones.svg";
import circles from "../images/bg-pattern-circles.svg";

const PhoneSection = () => {
  return (
    <section className=" w-full bg-gradient-to-r from-[#2c2d3f] to-[#3f4164] md:h-[400px] md:mt-36 mt-64 overflow-hidden rounded-tr-[6rem] rounded-bl-[6rem]">
      <img
        src={circles}
        alt="circles"
        className="relative z-0 origin-top ml-72 mt-16 md:mt-0 mb-32 md:mb-0 scale-150 md:scale-100 rotate-90 md:ml-64"
      />
      <img
        src={phones}
        alt="phones"
        className="absolute md:top-[1125px] top-[1375px] md:left-24"
      />

      <div className="h-full absolute top-[160%] md:top-[140%] md:left-[45%] md:pr-80 md:text-left text-center px-8 md:px-0 font-overpass font-semibold flex flex-col justify-center gap-6">
        <h1 className="text-white text-4xl">State of the Art Infrastructure</h1>
        <p className="text-gblue font-light leading-relaxed">
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
