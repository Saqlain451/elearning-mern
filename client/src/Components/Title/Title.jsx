import React from "react";

const Title = ({subHeading,heading,des,heading2,heading3}) => {
  return (
    <>
      <p className="text-center fs-2 fw-7 text-dark">{subHeading}</p>
      <h1 className="fs-4 text-center">{heading} <span className="text-green">{heading2}</span> {heading3}</h1>
      <p className="fs-1-5 text-center mt-1 text-dark">{des}</p>
    </>
  );
};

export default Title;
