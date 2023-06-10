import React from "react";
import editorm from "../images/illustration-editor-mobile.svg";
import editord from "../images/illustration-editor-desktop.svg";
import ParagraphComponent from "../components/ParagraphComponent";

const PresentationSection = () => {
  return (
    <section className="flex flex-col gap-8 text-center py-8 md:py-20 px-4">
      <h1 className="text-xl md:text-3xl font-overpass text-vdblue font-semibold ">
        Designed for the future
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <picture className="md:order-last md:absolute md:scale-90 md:left-[50%] md:top-[60%]">
          <source media="(min-width: 400px)" srcSet={editord} />
          <source media="(min-width: 280px)" srcSet={editorm} />
          <img src={editorm} alt="editor" />
        </picture>
        <div className="flex flex-col  gap-8 md:w-1/2 md:mt-20">
          <ParagraphComponent
            title="Introducing an extensible editor"
            content="Blogr features an exceedingly intuitive interface wich lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog."
          />
          <ParagraphComponent
            title="Robust content management"
            content="Flexible content management enables users to easily move trough posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control."
          />
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
