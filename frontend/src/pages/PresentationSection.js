import React from "react";
import editor from "../images/illustration-editor-mobile.svg";
import ParagraphComponent from "../components/ParagraphComponent";

const PresentationSection = () => {
  return (
    <section className="flex flex-col gap-8 text-center py-8 md:py-20 px-4">
      <h1 className="text-xl md:text-2xl font-overpass text-vdblue font-semibold ">
        Designed for the future
      </h1>
      <div className="flex flex-col md:flex-row gap-8 ">
        <img src={editor} alt="editor" className="md:order-last" />
        <div className="flex flex-col gap-8 md:w-1/2">
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
