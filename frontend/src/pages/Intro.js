import React from "react";
import Navbar from "../components/Navbar";

const Intro = () => {
  return (
    <section className="flex flex-col justify-start  items-center w-auto h-96 bg-gradient-to-r from-[#ff8f70] to-[#ff3d54] rounded-bl-[5rem] overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center my-auto">
        <h1 className="text-5xl text-white font-overpass font-semibold">
          A modern publishing platform
        </h1>
        <p>Grow your audience and build your online brand</p>
        <div className="flex gap-6">
          <button>Start for free</button>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
