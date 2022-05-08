import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { UploadForm } from "../Forms/UploadForm";
import { Modal } from "../";

export const NavLinks = () => {
  const { signOut } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
          <button className="btn btn--green" onClick={() => setIsModalOpen(true)}>
            Add a photo
          </button>
        </li>
      </ul>
      {isModalOpen && (
        <Modal
          setOpen={setIsModalOpen}
          content={<UploadForm setIsModalOpen={setIsModalOpen} />}
        />
      )}
    </>
  );
};
