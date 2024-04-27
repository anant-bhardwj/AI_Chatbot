import React from "react";
import Dark from "./Dark.jsx";
import Light from "./Light.jsx";
import Retro from "./Retro.jsx";
import Cupcake from "./Cupcake.jsx";

const Themes = () => {
  return (
    <div>
      <Light />
      <Dark />
      <Retro />
      <Cupcake />
    </div>
  );
};

export { Dark, Light, Retro, Cupcake };
