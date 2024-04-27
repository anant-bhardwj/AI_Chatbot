import React, { useEffect, useState } from "react";
import { Dark, Light, Retro, Cupcake } from "../assets/themes/Themes.jsx";
import IconSelector from "../assets/IconSelector.jsx";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="dropdown dropdown-hover dropdown-end">
        <div tabIndex={0} role="button" className="w-20 btn my-1 mx-4">
          {theme}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box mx-4"
        >
          <li>
            <button className="btn btn-ghost" onClick={() => setTheme("light")}>
              <Light />
            </button>
          </li>
          <li>
            <button className="btn btn-ghost" onClick={() => setTheme("dark")}>
              <Dark />
            </button>
          </li>
          <li>
            <button className="btn btn-ghost" onClick={() => setTheme("retro")}>
              <Retro />
            </button>
          </li>
          <li>
            <button
              className="btn btn-ghost"
              onClick={() => setTheme("cupcake")}
            >
              <Cupcake />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
