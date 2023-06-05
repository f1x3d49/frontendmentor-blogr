import React from "react";

const ParagraphComponent = ({ title, content }) => {
  return (
    <div
      className="flex flex-col md:text-left justify-start
    "
    >
      <h1 className="text-xl font-overpass font-semibold text-vdblue px-20 pb-4">
        {title}
      </h1>
      <p className="text-sm font-overpass text-vdgblue leading-relaxed px-1 text-center">
        {content}
      </p>
    </div>
  );
};

export default ParagraphComponent;
