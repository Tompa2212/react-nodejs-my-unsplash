import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";

export const NavLinks = () => {
  const { signOut } = useAuth();
  return (
    <ul className="nav-links">
      <li>
        <Link to="/" className="nav-link">
          All Images
        </Link>
      </li>
      <li>
        <Link to="/" className="nav-link">
          My Images
        </Link>
      </li>
      <li style={{ display: "inline-flex", alignItems: "center" }}>
        <button onClick={signOut} className="nav-link nav-link--signout">
          Sign out
        </button>
      </li>
      <li className="nav-link--right">
        <button className="btn btn--green">Add a photo</button>
      </li>
    </ul>
  );
};
