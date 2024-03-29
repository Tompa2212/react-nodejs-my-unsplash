import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { UploadForm } from "../Forms/UploadForm";
import { Modal } from "../";

export const NavLinks = ({ setNavOpened }) => {
  const { signOut } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link" onClick={() => setNavOpened(false)}>
            All Images
          </Link>
        </li>
        <li>
          <Link
            to="/myImages"
            className="nav-link"
            onClick={() => setNavOpened(false)}
          >
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
