import { useState } from "react";
import { SearchInput, Modal, UploadForm } from ".";
import unsplash_logo from "../images/unsplash_logo.svg";
import styled from "styled-components";

const Header = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Wrapper>
        <nav className="d-flex">
          <div className="d-flex">
            <img src={unsplash_logo} alt="unsplash logo" />
            <SearchInput />
          </div>
          <ul>
            <li>
              <a href="#">All Images</a>
            </li>
            <li>
              <a href="#">My Images</a>
            </li>
            <li>
              <a href="#">Sign Out</a>
            </li>
          </ul>
          <button
            className="btn btn--green"
            onClick={() => setIsModalOpen(true)}
          >
            Add a photo
          </button>
        </nav>
      </Wrapper>
      {isModalOpen && (
        <Modal
          setOpen={setIsModalOpen}
          component={<UploadForm setIsModalOpen={setIsModalOpen} />}
        />
      )}
    </>
  );
};

export default Header;

const Wrapper = styled.header`
  padding: 2rem 0rem;

  /* @media screen and (min-width: 60rem) {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 3rem;
  } */
`;
