import React from "react";
import laptopm from "../images/illustration-laptop-mobile.svg";
import laptopd from "../images/illustration-laptop-desktop.svg";
import ParagraphComponent from "../components/ParagraphComponent";

const LaptopSection = () => {
  return (
    <section className="flex flex-col md:flex-row md:py-48 items-center gap-8 px-4 py-8">
      <picture className=" md:scale-[2.5]">
        <source media="(min-width: 400px)" srcSet={laptopd} />
        <source media="(min-width: 280px)" srcSet={laptopm} />
        <img src={laptopm} alt="editor" />
      </picture>
      <div className="flex flex-col gap-8 items-center md:mx-48">
        <ParagraphComponent
          title="Free, open, simple"
          content="Blogr is a free and open source application backed by a large comunity of helpful developers. It supports features such as code syntax highlighting. RSS feeds, social media integration, third-party commenting tools, and works seamlessy with Google Analytics. The architecture is clean and relatively easy to learn."
        />
        <ParagraphComponent
          title="Powerful tooling"
          content="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."
        />
      </div>
    </section>
  );
};

export default LaptopSection;
