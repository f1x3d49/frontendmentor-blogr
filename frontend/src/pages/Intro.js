import React from "react";
import intro from "../images/bg-pattern-intro-desktop.svg";

const Intro = () => {
  return (
    <section className="w-full h-80 bg-gradient-to-r from-[#ff8f70] to-[#ff3d54] rounded-bl-[5rem] overflow-hidden">
      <img
        src={intro}
        alt=""
        className="mt-[-600px] ml-[475px] h-auto scale-125"
      />
    </section>
  );
};

export default Intro;
