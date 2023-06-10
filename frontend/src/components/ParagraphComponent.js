import React from "react";

const ParagraphComponent = ({ title, content }) => {
  return (
    <div className="md:text-left text-center md:pl-36 md:pr-28 indent-0">
      <h1 className={`text-2xl font-overpass font-semibold  text-vdblue pb-4`}>
        {title}
      </h1>
      <p className={`text-base font-overpass text-vdgblue leading-relaxed`}>
        {content}
      </p>
    </div>
  );
};

export default ParagraphComponent;
