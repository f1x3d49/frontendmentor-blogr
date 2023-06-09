import React from "react";

const ParagraphComponent = ({ title, content }) => {
  return (
    <div className="md:text-left md:pl-20 md:pr-56">
      <h1 className="text-xl font-overpass font-semibold text-vdblue  pb-4">
        {title}
      </h1>
      <p className="text-sm font-overpass text-vdgblue leading-relaxed  text-center">
        {content}
      </p>
    </div>
  );
};

export default ParagraphComponent;
