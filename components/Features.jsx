import React from "react";

const Features = ({ children }) => {
  const modifyFeatureDescription = () => {
    const strArray = children.split(".");
    let first = "";
    let second = "";
    strArray.forEach((str, index) => {
      if (index < 3) {
        first = first + str + ". ";
      } else {
        second = second + str + ". ";
      }
    });
    return [first, second];
  };

  const [first, second] = modifyFeatureDescription();

  return (
    <div className="lg:w-[635px]">
      <h2 className="text-features-mobile md:text-h3 font-bold uppercase">
        Features
      </h2>
      <p className="mt-6 text-body">{first}</p>
      <p className="mt-5 text-body">{second}</p>
    </div>
  );
};

export default Features;
