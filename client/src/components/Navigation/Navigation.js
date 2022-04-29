import React, { useState } from "react";
import { NavHeader, NavLinks } from ".";
export const Navigation = () => {
  const [navOpened, setNavOpened] = useState(false);

  return (
    <nav className="nav">
      <NavHeader setNavOpened={setNavOpened} />
      <div className={`nav-center ${navOpened ? "show" : ""}`}>
        <NavLinks />
      </div>
    </nav>
  );
};
