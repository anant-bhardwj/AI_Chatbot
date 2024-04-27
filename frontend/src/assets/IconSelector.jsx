import React from "react";
import Dark from "./themes/Dark";
import Light from "./themes/Light";
import Retro from "./themes/Retro";
import Cupcake from "./themes/Cupcake";

const IconSelector = (option) => {
  let selected;
  if (option === "dark") selected = <Dark />;
  else if (option === "light") selected = <Light />;
  else if (option === "retro") selected = <Retro />;
  else if (option === "cupcake") selected = <Cupcake />;
  return <div>{selected}</div>;
};

export default IconSelector;
