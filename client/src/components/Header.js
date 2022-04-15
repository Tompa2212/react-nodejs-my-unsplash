import { useEffect, useState } from "react";
import { useDebouncedValue } from "../hooks/useDebouncedValue";
import { SearchInput, Modal, UploadForm } from ".";
import { Link } from "react-router-dom";
import unsplash_logo from "../images/unsplash_logo.svg";
import styled from "styled-components";
import { variables } from "../styles/styled-variables";
import { useImages } from "../context/images";
import { useAuth } from "../context/auth";

const Header = () => {
  const { dispatch } = useImages();
  const { signOut } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const debouncedValue = useDebouncedValue(searchValue, 300);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (debouncedValue.length >= 3 || debouncedValue.length === 0) {
      dispatch({ type: "SEARCH_IMAGES", payload: debouncedValue });
    }
  }, [debouncedValue, dispatch]);

  return (
    <>
      <Wrapper>
        <div className="search">
          <img src={unsplash_logo} alt="unsplash logo" />
          <SearchInput value={searchValue} onChange={handleChange} />
        </div>
        <nav className="d-flex">
          <ul className="d-flex nav-links">
            <li>
              <Link to="/" className="nav-link">
                All Images
              </Link>
            </li>
            <li>
              <a href="#" className="nav-link">
                My Images
              </a>
            </li>
            <li>
              <button onClick={signOut} className="btn btn--sign-out">
                Sign out
              </button>
            </li>
          </ul>
          <button
            className="btn btn--green"
            style={{ alignSelf: "center" }}
            onClick={() => setIsModalOpen(true)}
          >
            Add a photo
          </button>
        </nav>
      </Wrapper>
      {isModalOpen && (
        <Modal
          setOpen={setIsModalOpen}
          content={<UploadForm setIsModalOpen={setIsModalOpen} />}
        />
      )}
    </>
  );
};

export default Header;

const Wrapper = styled.header`
  padding: 2rem 0rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;

  .search {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;
