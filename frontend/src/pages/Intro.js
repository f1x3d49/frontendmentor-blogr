import React from "react";
import introd from "../images/bg-pattern-intro-desktop.svg";
import introm from "../images/bg-pattern-intro-mobile.svg";

const Intro = () => {
  return (
    <section className="w-auto h-96 bg-gradient-to-r from-[#ff8f70] to-[#ff3d54] rounded-bl-[5rem] overflow-hidden">
      <picture>
        <source media="(min-width: 768px)" srcset={introd} />
        <source srcset={introm} />
        <img src={introm} alt="" className="md:mt-[-550px] scale-125" />
      </picture>
    </section>
  );
};

export default Intro;
