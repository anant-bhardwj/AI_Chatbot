import React from "react";
import useLogout from "../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <button className="btn btn-circle" onClick={logout}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 15 15"
        fill="oklch(var(--bc))"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 7.5L10.5 10.75M13.5 7.5L10.5 4.5M13.5 7.5L4 7.5M8 13.5H1.5L1.5 1.5L8 1.5"
          fill="oklch(var(--bc))"
          stroke="oklch(var(--bc))"
        />
      </svg>
    </button>
  );
};

export default LogoutButton;
