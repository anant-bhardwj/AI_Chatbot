import React, { useEffect, useState } from "react";
import { Dark, Light, Retro, Cupcake } from "../assets/themes/Themes.jsx";
import { useAuthContext } from "../context/AuthContext.jsx";
import LogoutButton from "./LogoutButton.jsx";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const { authUser } = useAuthContext();

  return (
    <div className="navbar bg-base-300 shadow">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">PuuP GPT</a>
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
      <div className="m-auto px-2">{authUser ? <LogoutButton /> : null}</div>
    </div>
  );
};

export default Navbar;
