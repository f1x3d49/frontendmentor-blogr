import React from "react";
import Navbar from "../components/Navbar";

const Intro = () => {
  return (
    <section className="flex flex-col justify-start  items-center w-auto h-96 bg-gradient-to-r from-[#ff8f70] to-[#ff3d54] rounded-bl-[5rem] ring-2 ring-vlred">
      <Navbar />
      <div className="flex flex-col items-center my-auto px-12 md:px-0 text-center">
        <h1 className="md:text-5xl text-3xl text-center text-white font-overpass font-semibold">
          A modern publishing platform
        </h1>
        <p className="text-[16px] text-white font-overpass py-8 ">
          Grow your audience and build your online brand
        </p>
        <div className="flex gap-4">
          <button className="rounded-full bg-white hover:bg-vlred hover:text-white shadow-sm min-w-auto p-3 text-center text-lred font-ubuntu font-bold">
            Start for Free
          </button>
          <button className="rounded-full min-w-auto text-white p-3 border-2 hover:bg-white hover:text-lred border-white text-center font-ubuntu font-bold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
